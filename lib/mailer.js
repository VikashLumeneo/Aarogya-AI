/**
 * Shared backend logic for the ANVIQ website forms.
 * Used by the Vercel functions in /api and by the local server (server.js).
 */
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const TO_EMAIL = process.env.TO_EMAIL || 'vikash@lumeneo.ai';
// Gmail defaults: only SMTP_PASS (the Google App Password) is required in .env
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_USER = process.env.SMTP_USER || TO_EMAIL;
const SMTP_PASS = (process.env.SMTP_PASS || '').replace(/\s+/g, '');   // "abcd efgh ..." also works
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ---------- helpers ---------- */
const clean = (v, max = 200) => String(v == null ? '' : v).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* simple in-memory rate limit: 5 requests per 10 minutes per IP */
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now(), win = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < win);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

/* ---------- mail transport ---------- */
let transporter = null;
function smtpConfigured() {
  return Boolean(SMTP_PASS);
}
function getTransport() {
  if (transporter) return transporter;
  if (smtpConfigured()) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  } else {
    // No SMTP yet: build the email but don't send it (printed in the server console)
    transporter = nodemailer.createTransport({ jsonTransport: true });
  }
  return transporter;
}

/* keep a copy of every submission when running locally (skipped on read-only hosts) */
function saveCopy(entry) {
  try {
    const dir = path.join(__dirname, '..', 'data');
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(path.join(dir, 'submissions.jsonl'), JSON.stringify(entry) + '\n');
  } catch (_) { /* read-only filesystem (e.g. Vercel) */ }
}

function emailLayout(title, rows, footer) {
  const tr = rows.map(([k, v]) => `<tr><td style="padding:8px 12px;color:#4B5F63;border-bottom:1px solid #E4EEEC;width:140px">${esc(k)}</td>` +
    `<td style="padding:8px 12px;color:#0B2226;border-bottom:1px solid #E4EEEC;font-weight:600">${esc(v || '—')}</td></tr>`).join('');
  return `<div style="font-family:Arial,sans-serif;background:#F5F7F8;padding:24px">
  <div style="max-width:560px;margin:auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #D6E6E3">
    <div style="background:#0A3D3A;color:#fff;padding:18px 22px;font-size:18px;font-weight:700">ANV<span style="color:#F2572B">IQ</span> · ${esc(title)}</div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${tr}</table>
    <div style="padding:14px 22px;color:#687E79;font-size:12px">${esc(footer)}</div>
  </div></div>`;
}

async function send(message) {
  const info = await getTransport().sendMail({
    from: process.env.FROM_EMAIL || `ANVIQ <${SMTP_USER}>`,
    ...message,
  });
  if (!smtpConfigured()) {
    console.log('\n[mail] SMTP not configured — email NOT sent. Preview:\n', JSON.parse(info.message).subject, '→', message.to);
  }
  return info;
}

/* ---------- form handlers ---------- */
const FORMS = {
  // Signup modal: "Request Early Access"
  'early-access': {
    parse(b) {
      return {
        firstName: clean(b.firstName, 80),
        lastName: clean(b.lastName, 80),
        email: clean(b.email, 160).toLowerCase(),
        specialty: clean(b.specialty, 80),
        plan: clean(b.plan, 80) || 'Free Trial',
      };
    },
    validate(d) {
      if (!d.firstName) return 'Please enter your first name';
      if (!EMAIL_RE.test(d.email)) return 'Please enter a valid work email address';
      return null;
    },
    build(d, meta) {
      const name = `${d.firstName} ${d.lastName}`.trim();
      return {
        admin: {
          to: TO_EMAIL,
          replyTo: d.email,
          subject: `New early access request: ${name} (${d.plan})`,
          html: emailLayout('New early access request', [
            ['Name', name], ['Email', d.email], ['Specialty', d.specialty], ['Plan', d.plan],
            ['Page', meta.page], ['Time', meta.time],
          ], 'Sent from the "Request Early Access" form on the ANVIQ website. Reply to this email to contact the person.'),
        },
        user: {
          to: d.email,
          subject: 'Thanks for your interest in ANVIQ',
          html: emailLayout('Request received', [
            ['Name', name], ['Plan', d.plan], ['Specialty', d.specialty],
          ], 'Thanks for requesting early access to ANVIQ. Our team will contact you shortly.'),
        },
      };
    },
  },

  // Resources page: "Notify me"
  'notify': {
    parse(b) { return { email: clean(b.email, 160).toLowerCase() }; },
    validate(d) { return EMAIL_RE.test(d.email) ? null : 'Please enter a valid work email address'; },
    build(d, meta) {
      return {
        admin: {
          to: TO_EMAIL,
          replyTo: d.email,
          subject: `Resources Hub: new sign-up (${d.email})`,
          html: emailLayout('Resources Hub notify list', [
            ['Email', d.email], ['Page', meta.page], ['Time', meta.time],
          ], 'This person asked to be emailed when the Resources Hub launches.'),
        },
        user: {
          to: d.email,
          subject: "You're on the ANVIQ Resources list",
          html: emailLayout("You're on the list", [['Email', d.email]],
            "We'll email you as soon as the ANVIQ Resources Hub launches."),
        },
      };
    },
  },
};

/**
 * Handle one submission. Returns { status, body }.
 */
async function handleForm(formName, body, ip) {
  const form = FORMS[formName];
  if (!form) return { status: 404, body: { ok: false, error: 'Unknown form' } };
  if (body && body.website) return { status: 200, body: { ok: true } };      // honeypot: bots fill hidden field
  if (rateLimited(ip || 'unknown')) return { status: 429, body: { ok: false, error: 'Too many requests. Please try again later.' } };

  const data = form.parse(body || {});
  const problem = form.validate(data);
  if (problem) return { status: 400, body: { ok: false, error: problem } };

  const meta = { page: clean(body.page, 200), time: new Date().toISOString() };
  saveCopy({ form: formName, ...data, ...meta });

  try {
    const mails = form.build(data, meta);
    await send(mails.admin);
    if (process.env.AUTO_REPLY !== 'false') {
      await send(mails.user).catch((e) => console.error('[mail] auto-reply failed:', e.message));
    }
    return { status: 200, body: { ok: true } };
  } catch (err) {
    console.error('[mail] send failed:', err.code || '', err.responseCode || '', err.message);
    if (err.responseCode === 535 || err.code === 'EAUTH') {
      console.error('[mail] Gmail rejected the login. Check SMTP_PASS in .env is the 16-letter App Password for ' + SMTP_USER);
    }
    return { status: 502, body: { ok: false, error: 'Could not send right now. Please try again in a few minutes.' } };
  }
}

module.exports = { handleForm, smtpConfigured, TO_EMAIL, SMTP_USER };
