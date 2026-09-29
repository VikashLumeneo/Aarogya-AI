# ANVIQ website – change log & revert guide

## 28 Sep 2026 – Teal green palette + glassmorphism (LIVE)

**What changed**
- New colors: primary teal green `#0A3D3A`, mint highlight `#2DD4BF`, orange buttons `#F2572B`
- Glass / mirror effect on cards, dark sections, buttons and navbar → all in `css/glass.css`
- "Faster Prescriptions" cards redesigned (icons, aligned rows)
- Files touched: `index.html`, `css/variables.css`, `css/main.css`, `css/sections.css`,
  `css/pages.css`, `css/glass.css` (new), `js/pricing-table.js`

### Follow-up: "Faster Prescriptions" cards
- Removed the icons from the 4 cards; cards now show 2 per row (1 per row on mobile)
- Files: `index.html`, `css/sections.css`, `css/glass.css`

### Follow-up: Plans page + navbar redesign
- Plans page: pricing cards now sit in a dark teal glass panel with glowing orbs, white pill tags,
  round check icons and buttons at the bottom → `css/pricing-glass.css`
- Navbar: floating glass bar, pill-shaped links (active = dark teal pill), "Start Free Trial" button
  with round orange arrow → `css/nav-glass.css`
- To undo either one, delete its `<link>` line in `index.html`

### Follow-up: plain section backgrounds
- Removed the green/orange colour glow behind all light sections (every page)
- Light sections now alternate plain white and soft grey `#F5F7F8` (`--bg-secondary`)
- Files: `css/glass.css`, `css/variables.css`

### Follow-up: full-width pricing panel
- The dark teal pricing panel now spans the full screen width and joins the hero (no white gap)
- File: `css/pricing-glass.css`

### Follow-up: no white strip above the navbar
- Removed the 12px top gap on every page, so the hero background runs up behind the floating navbar
- Privacy / Terms / Support pages (no hero) got extra top space so the navbar doesn't cover the heading
- File: `css/nav-glass.css`

### Follow-up: Resources page redesign
- New dark teal hero with "Notify me" email form, glass preview cards, category chips
- "What's coming" cards (Articles, Webinars, Research, Product Updates) and "Explore ANVIQ" links
- CTA with Start Free Trial + Back to Home; old rocket image and old resources CSS removed
- Note: the Notify form only shows a thank-you message — it does not save or send emails yet
- Files: `index.html`, `css/resources.css` (new), `css/sections.css`, `js/ui.js` (`rhNotify`)

### Follow-up: animated Resources hero
- Right side now moves: cards tilt with the mouse, rotating rings with orbiting dots, twinkling sparkles
- Guide lines "write" themselves, webinar play button pulses with a progress bar, research bars grow
- "Now preparing: Guides / Webinars / Research / Updates" pill cycles words
- Animations always play, even when Windows "Animation effects" is off (that setting was stopping them)
- Files: `index.html`, `css/resources.css`, `js/ui.js`

### Follow-up: form backend (emails to vikash@lumeneo.ai)
- "Request Early Access" popup and Resources "Notify me" now POST to a real backend
- Each submission emails vikash@lumeneo.ai and sends a thank-you email to the visitor
- New files: `server.js`, `package.json`, `lib/mailer.js`, `api/early-access.js`, `api/notify.js`,
  `api/_handler.js`, `.env.example`, `.gitignore`, `BACKEND.md` (setup steps)
- Changed: `js/ui.js` (sends the forms), `index.html` (hidden spam-trap fields), `css/resources.css`
- To undo: restore `js/ui.js` from before this change; the backend files can simply be deleted

### Follow-up: feature comparison table fix (Plans page)
- Header row was "sticky" inside the table's scroll box, so it slid down, left an empty white gap
  on top and covered the first row ("AI Chest X-ray") — now fixed
- Row hover is a soft tint instead of turning the Hospital cell solid dark
- File: `css/pricing-glass.css`

### Follow-up: "Request Early Access" popup fits every screen
- Popup was behind the floating navbar and cut off on short screens; now it sits on top, fits the
  screen height and scrolls inside itself; first/last name side by side on wider screens
- Page behind stops scrolling while the popup is open
- Files: `css/main.css`, `index.html`, `js/ui.js`

### Follow-up: team section (About page), matched to site style
- Team cards use the same glass card style as the journey/product cards: rounded glass card,
  orange top line + orange border + lift on hover, role in a pill tag, dark-teal LinkedIn button
  that turns orange on hover; photo colour + small zoom on hover; soft fade-in on scroll
- Every team photo is cropped so the face is the same size and position (per-photo values in `style` on each `<img>`)
- Files: `css/team.css` (new), `index.html`, `js/ui.js`. Undo: remove the `css/team.css` link

### Follow-up: new Privacy Policy page
- Teal hero, 4 "at a glance" cards, sticky contents list with the current section highlighted,
  13 numbered sections, forms table, rights cards, dark teal contact block
- Content updated for the new website: Early Access / Notify forms, emails via Google Workspace,
  hosting on Vercel, no tracking cookies, Google Fonts / cdnjs, DPDP Act 2023 rights, grievance contact
- Files: `index.html` (#page-privacy), `css/privacy.css` (new), `js/ui.js`

### Follow-up: new Terms & Conditions page
- Same design as the Privacy page (teal hero, at-a-glance cards, sticky contents, 15 numbered sections)
- Content updated: all 4 products, trials/plans, AI output must be reviewed, medical disclaimer,
  data ownership + link to Privacy Policy, acceptable use (incl. form spam), Indian law
- Files: `index.html` (#page-terms), `js/ui.js` (contents list now works on both pages); reuses `css/privacy.css`

### Follow-up: Contact Support page redesign
- Teal hero, 4 clickable help-topic cards (pre-select the topic in the form), contact form that emails
  vikash@lumeneo.ai + sends the visitor a confirmation, contact directory, security report card,
  response-time cards and FAQ accordion
- New backend endpoint: `POST /api/contact` (`api/contact.js`, form added in `lib/mailer.js`, route in `server.js`)
- Files: `index.html`, `css/contact.css` (new), `js/ui.js`

### Follow-up: Radiologist "Sample Output" report card
- Teal header with tags, findings as stat tiles (largest lesion highlighted), organ status list with
  green "normal" dots, orange action alert with pulsing icon + recommendation pill, soft footer
- Files: `index.html`, `css/report.css` (new)

### Follow-up: Radiologist page backgrounds + modality cards
- Rhythm: dark hero → white → soft grey (sample report) → dark teal band (modalities) → white CTA
- Modalities: glass pill tab switcher, 4 dark-glass cards per row with hover lift + teal/orange top line,
  white "Available" / mint "New" badges, fade-in when switching tabs
- File: `css/report.css`

## Earlier the same day – CSS cleanup
- Removed unused CSS, merged dead/duplicate rules, moved inline `<style>` blocks to `css/pages.css`

---

## How to revert (pick one)

**1. Remove only the glass effect (keep teal colors)**
Delete this one line in `index.html` (inside `<head>`):
```html
<link rel="stylesheet" href="css/glass.css">
```

**2. Go back to the old navy + orange look (before teal + glass)**
Copy everything from `backup-before-teal-glass/` over the project files:
- `backup-before-teal-glass/index.html` → `index.html`
- `backup-before-teal-glass/css/*` → `css/`
- `backup-before-teal-glass/js/pricing-table.js` → `js/pricing-table.js`
- then delete `css/glass.css`

Note: this backup is the cleaned-up CSS version, without the new "Faster Prescriptions" card design.

**3. Go back to the very original code (before any of today's changes)**
Copy everything from `backup-before-css-refactor/` over the project files, then delete
`css/pages.css` and `css/glass.css`.

**Using git (recommended)**
This folder is a git repo. Before testing, save the current state:
```bash
git add -A
git commit -m "Teal green + glassmorphism theme"
```
To undo later: `git revert HEAD` (keeps history), or view old version with `git log`.
