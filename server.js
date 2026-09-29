/**
 * Local server for the ANVIQ website.
 *   npm install      (first time only)
 *   npm start        → http://localhost:4545
 * Serves the website and the form backend (/api/early-access, /api/notify).
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

/* load .env (KEY=value lines) without extra packages */
try {
  fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  });
} catch (_) { /* no .env yet */ }

const { smtpConfigured, TO_EMAIL } = require('./lib/mailer');
const API = {
  '/api/early-access': require('./api/early-access'),
  '/api/notify': require('./api/notify'),
  '/api/contact': require('./api/contact'),
};

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 4545);   // own port, so it doesn't clash with other apps on 3000
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};
// never serve these over HTTP
const BLOCKED = /^\/(\.env|\.git|lib|api|data|node_modules|server\.js|package)/i;

const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);

  if (API[url]) return API[url](req, res);

  if (BLOCKED.test(url)) { res.statusCode = 404; return res.end('Not found'); }
  let file = path.normalize(path.join(ROOT, url === '/' ? 'index.html' : url));
  if (!file.startsWith(ROOT)) { res.statusCode = 403; return res.end('Forbidden'); }

  fs.stat(file, (err, st) => {
    if (!err && st.isDirectory()) file = path.join(file, 'index.html');
    fs.readFile(file, (e, buf) => {
      if (e) { res.statusCode = 404; return res.end('Not found'); }
      res.setHeader('Content-Type', TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-store');
      res.end(buf);
    });
  });
}).listen(PORT, () => {
  console.log(`\nANVIQ website running at http://localhost:${PORT}`);
  console.log(`Form emails go to: ${TO_EMAIL}`);
  if (!smtpConfigured()) console.log('⚠  SMTP_PASS missing in .env — emails will be printed here, not sent.');
  else console.log(`Sending with Gmail account: ${require('./lib/mailer').SMTP_USER}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n✖ Port ${PORT} is already used by another program. Close it, or run with another port:  set PORT=4546 && npm start`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
