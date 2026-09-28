# Form backend (emails to vikash@lumeneo.ai)

Two forms on the website now send real emails:

| Form | Where | API | Email to vikash@lumeneo.ai | Auto-reply to visitor |
|---|---|---|---|---|
| Request Early Access (popup) | "Request Access" / signup buttons | `POST /api/early-access` | name, email, specialty, plan | "Thanks for your interest in ANVIQ" |
| Notify me | Resources page | `POST /api/notify` | email | "You're on the ANVIQ Resources list" |

Every submission is also saved to `data/submissions.jsonl` when running locally.
Spam protection: hidden honeypot field, 5 requests / 10 min per IP, server-side validation, HTML escaping.

## 1. One-time setup
1. Install Node.js 18 or newer.
2. In VS Code terminal, inside the `arogya-ai` folder:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in `SMTP_PASS` (and host if not Google).
   - Google Workspace / Gmail: turn on 2-Step Verification, then create an **App password**
     (Google Account → Security → App passwords) and paste the 16 letters into `SMTP_PASS`.
   - `.env` is in `.gitignore` — never commit it.

## 2. Run locally
```bash
npm start
```
Open http://localhost:3000 — website + backend together.
You can still use Live Server (port 5502): forms automatically send to http://localhost:3000,
so keep `npm start` running in a terminal.

If `SMTP_PASS` is empty, nothing is sent: the email is printed in the terminal instead.

## 3. Deploy (Vercel)
The `api/` folder works as Vercel serverless functions automatically.
In Vercel → Project → Settings → Environment Variables add:
`TO_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, AUTO_REPLY` (same as `.env`).
Then push to GitHub; Vercel redeploys.

## Files
- `lib/mailer.js` – validation, spam checks, email templates, sending
- `api/early-access.js`, `api/notify.js`, `api/_handler.js` – the two endpoints
- `server.js` – local server (website + API), `package.json` – `npm start`
- `.env.example` – settings template
