/**
 * Theme, mobile nav, tabs, modals, toasts, and scroll animations
 */

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeIcon').textContent = isDark ? '🌙' : '☀️';
}

let scrollY = 0;

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburgerBtn');
  const body = document.body;
  const open = nav.classList.toggle('open');

  btn.setAttribute('aria-expanded', open);

  if (open) {
    scrollY = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
  } else {
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    window.scrollTo(0, scrollY);
  }
}

function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  const body = document.body;

  nav.classList.remove('open');
  body.style.position = '';
  body.style.top = '';
  body.style.width = '';
}

function switchTab(groupId, tabId, btn) {
  const container = btn.closest('section') || document;
  const panels = container.querySelectorAll('.tab-panel');
  const btns = btn.parentElement.querySelectorAll('.tab-btn');

  panels.forEach((p) => p.classList.remove('active'));
  btns.forEach((b) => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

function showPricingTab(tab) {
  ['scribe', 'radiology', 'enterprise'].forEach((t) => {
    const el = document.getElementById('pricing-' + t);
    const chip = document.getElementById('chip-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
    if (chip) chip.classList.toggle('active', t === tab);
  });
}

function openSignup(plan) {
  document.getElementById('modalPlanBadge').textContent = plan || 'Free Trial';
  const overlay = document.getElementById('signupModal');
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.documentElement.style.overflow = 'hidden';   // stop the page behind from scrolling
  document.getElementById('signupFirst').focus({ preventScroll: true });
}

function closeSignup() {
  document.getElementById('signupModal').classList.remove('open');
  document.documentElement.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('signupModal')) closeSignup();
}

/* ---------- Form backend ----------
 * Same server in production (/api/...). When the site is opened with VS Code Live Server
 * (port 5502) or as a file, send to the local backend started with "npm start".
 */
const API_BASE = (() => {
  const BACKEND = 'http://localhost:4545';   // started with "npm start"
  if (location.protocol === 'file:') return BACKEND;
  const local = ['localhost', '127.0.0.1'].includes(location.hostname);
  // Live Server (5500, 5501, 5502…) has no backend: use the one started with "npm start"
  if (local && location.port !== '4545') return BACKEND;
  return '';
})();

async function postForm(name, data) {
  let res;
  try {
    res = await fetch(`${API_BASE}/api/${name}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, page: location.href }),
    });
  } catch (err) {
    throw new Error('Cannot reach the server. Is the backend running? (npm start)');
  }
  const out = await res.json().catch(() => null);
  if (!out) {
    console.error('[form] backend did not return JSON', res.status, res.url);
    throw new Error(`Backend not found (${res.status}). Run "npm start" in the arogya-ai folder`);
  }
  if (!res.ok || !out.ok) throw new Error(out.error || 'Something went wrong. Please try again.');
  return out;
}

async function submitSignup() {
  const first = document.getElementById('signupFirst').value.trim();
  const last = document.getElementById('signupLast').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const specialty = document.getElementById('signupSpecialty').value;
  const plan = document.getElementById('modalPlanBadge').textContent.trim();
  const honeypot = document.getElementById('signupWebsite');
  const btn = document.getElementById('signupSubmit');

  if (!first) {
    showToast('⚠️ Please enter your first name', 'warning');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    showToast('⚠️ Please enter a valid work email address', 'warning');
    return;
  }

  const label = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }
  try {
    await postForm('early-access', {
      firstName: first, lastName: last, email, specialty, plan,
      website: honeypot ? honeypot.value : '',
    });
    closeSignup();
    ['signupFirst', 'signupLast', 'signupEmail'].forEach((id) => { document.getElementById(id).value = ''; });
    document.getElementById('signupSpecialty').value = '';
    showToast("🎉 Thanks! We've received your request and will contact you soon.");
  } catch (err) {
    showToast('⚠️ ' + err.message, 'warning');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = label; }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSignup();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMobileNav();
  }
});

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML =
    `<span class="toast-icon">${type === 'success' ? '✅' : '⚠️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all .3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

document.querySelectorAll('.nav-link, .nav-dropdown-item, .mobile-nav-link').forEach((el) => {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.click();
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
        // after the fade-in, remove the inline styles so CSS hover effects (lift etc.) work again
        setTimeout(() => {
          el.style.removeProperty('transform');
          el.style.removeProperty('transition');
          el.style.removeProperty('opacity');
        }, 600);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.card, .product-card, .testimonial-card, .pricing-card, .resource-card')
  .forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

/** Resources page: "Notify me" form → /api/notify */
async function rhNotify(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input[type="email"]');
  const btn = form.querySelector('button[type="submit"]');
  const trap = form.querySelector('input[name="website"]');
  const email = input.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    showToast('⚠️ Please enter a valid work email address', 'warning');
    input.focus();
    return false;
  }
  const label = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = 'Sending…';
  try {
    await postForm('notify', { email, website: trap ? trap.value : '' });
    form.classList.add('is-done');
    input.value = '';
    input.placeholder = "You're on the list!";
    showToast("🎉 Thanks! We'll let you know when the Resources Hub launches.");
  } catch (err) {
    showToast('⚠️ ' + err.message, 'warning');
  } finally {
    btn.disabled = false;
    btn.innerHTML = label;
  }
  return false;
}

/** Resources hero: mouse parallax on the preview cards + cycling "Now preparing" word */
(function () {
  const preview = document.getElementById('rhPreview');
  if (!preview) return;
  // animations always play (Windows "animation effects: off" used to switch them off)
  {
    const hero = preview.closest('section') || preview;
    hero.addEventListener('mousemove', (e) => {
      const r = preview.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;   // about -1 … 1
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      preview.style.setProperty('--mx', Math.max(-1, Math.min(1, x)).toFixed(3));
      preview.style.setProperty('--my', Math.max(-1, Math.min(1, y)).toFixed(3));
    });
    hero.addEventListener('mouseleave', () => {
      preview.style.setProperty('--mx', 0);
      preview.style.setProperty('--my', 0);
    });
  }

  const word = document.getElementById('rhWord');
  const words = ['Guides', 'Webinars', 'Research', 'Updates'];
  let i = 0;
  if (word) {
    setInterval(() => {
      word.classList.add('is-out');
      setTimeout(() => {
        i = (i + 1) % words.length;
        word.textContent = words[i];
        word.classList.remove('is-out');
      }, 300);
    }, 2200);
  }
})();


/** Team section: soft fade-in on scroll, one card after another */
(function () {
  const cards = document.querySelectorAll('.team-card');
  if (!cards.length) return;

  cards.forEach((card, i) => card.style.setProperty('--i', i % 4));   // stagger per row

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  cards.forEach((c) => io.observe(c));

})();


/** Privacy & Terms pages: smooth-scroll contents links (without changing the page hash) + highlight current section */
document.querySelectorAll('.pp-toc').forEach((toc) => {
  const links = [...toc.querySelectorAll('a[href^="#"]')];

  links.forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();                       // keep "#privacy" / "#terms" in the URL so the page router is not triggered
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-120px 0px -60% 0px' });
  links.forEach((l) => { const t = document.getElementById(l.getAttribute('href').slice(1)); if (t) spy.observe(t); });
});


/** Contact Support page: topic cards pre-select the form, message counter, send to /api/contact */
(function () {
  const form = document.getElementById('csForm');
  if (!form) return;
  const topic = document.getElementById('csTopic');
  const msg = document.getElementById('csMessage');
  const count = document.getElementById('csCount');

  document.querySelectorAll('.cs-topic').forEach((card) => card.addEventListener('click', () => {
    const want = card.dataset.topic;
    [...topic.options].forEach((o) => { if (o.text === want) topic.value = o.value; });
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    form.classList.add('is-flash');
    setTimeout(() => form.classList.remove('is-flash'), 1200);
    setTimeout(() => document.getElementById('csName').focus({ preventScroll: true }), 500);
  }));

  const meter = document.getElementById('csMeter');
  msg.addEventListener('input', () => {
    count.textContent = `${msg.value.length} / 2000`;
    if (meter) meter.style.width = Math.min(100, msg.value.length / 20) + '%';
  });

  // topic chips <-> hidden select (topic cards above also change the select)
  const chips = [...form.querySelectorAll('.cs-chip')];
  const syncChips = () => chips.forEach((c) => c.classList.toggle('is-on', c.dataset.v === topic.value));
  chips.forEach((c) => c.addEventListener('click', () => { topic.value = c.dataset.v; syncChips(); renderSugs(); }));

  // quick suggestions per topic: click to add to the message
  const SUGS = {
    'Technical support': ["I can't log in to my account", 'Recording is not starting', 'Report is not generating'],
    'Product onboarding': ['How do I add my team?', 'Help me set up templates', 'Can we book a training session?'],
    'Enterprise & hospitals': ['We want to connect our PACS / HIMS', 'Pricing for 50+ doctors', 'Security & compliance review'],
    'Billing & subscriptions': ['I need an invoice', 'Upgrade my plan', 'Cancel my subscription'],
    'Security & privacy': ['Report a vulnerability', 'Request deletion of my data', 'Where is my data stored?'],
    'Something else': ['I have a partnership idea', 'Press / media enquiry', 'Feedback about ANVIQ'],
  };
  const sugBox = document.getElementById('csSugs');
  function renderSugs() {
    if (!sugBox) return;
    sugBox.innerHTML = '';
    (SUGS[topic.value] || []).forEach((t, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'cs-sug'; b.textContent = t;
      b.style.animationDelay = (i * 60) + 'ms';
      b.addEventListener('click', () => {
        msg.value = msg.value.trim() ? msg.value.trim() + '\n' + t : t;
        msg.dispatchEvent(new Event('input')); msg.focus();
      });
      sugBox.appendChild(b);
    });
  }
  renderSugs();

  // live checks + step progress
  const nameEl = document.getElementById('csName'), emailEl = document.getElementById('csEmail');
  const steps = form.querySelectorAll('.cs-steps li');
  function checkProgress() {
    const nameOk = nameEl.value.trim().length > 1;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailEl.value.trim());
    nameEl.parentElement.classList.toggle('is-ok', nameOk);
    emailEl.parentElement.classList.toggle('is-ok', emailOk);
    const done = { you: nameOk && emailOk, topic: true, msg: msg.value.trim().length >= 10 };
    steps.forEach((s) => s.classList.toggle('is-done', !!done[s.dataset.step]));
  }
  [nameEl, emailEl, msg].forEach((el) => el.addEventListener('input', checkProgress));
  checkProgress();
  topic.addEventListener('change', syncChips);
  document.querySelectorAll('.cs-topic').forEach((card) => card.addEventListener('click', () => setTimeout(() => { syncChips(); renderSugs(); }, 0)));
})();

async function csSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const v = (id) => document.getElementById(id).value.trim();
  const data = {
    name: v('csName'), email: v('csEmail'), organisation: v('csOrg'),
    topic: document.getElementById('csTopic').value, message: v('csMessage'),
    website: form.querySelector('input[name="website"]').value,
  };
  if (!data.name) { showToast('⚠️ Please enter your name', 'warning'); return false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) { showToast('⚠️ Please enter a valid work email address', 'warning'); return false; }
  if (data.message.length < 10) { showToast('⚠️ Please write a short message (at least 10 characters)', 'warning'); return false; }

  const btn = document.getElementById('csSendBtn');
  const label = btn.innerHTML;
  btn.style.minWidth = btn.offsetWidth + 'px';
  btn.disabled = true; btn.innerHTML = 'Sending…';
  try {
    await postForm('contact', data);
    btn.classList.add('is-flying');                   // paper plane flies off
    await new Promise((r) => setTimeout(r, 650));
    btn.classList.remove('is-flying');
    form.style.minHeight = form.offsetHeight + 'px';   // keep the same size so the page doesn't jump
    form.classList.add('is-sent');
    showToast("🎉 Message sent! We'll reply within 24 hours.");
  } catch (err) {
    showToast('⚠️ ' + err.message, 'warning');
  } finally {
    btn.disabled = false; btn.innerHTML = label;
  }
  return false;
}

function csReset() {
  const form = document.getElementById('csForm');
  form.reset();
  document.getElementById('csCount').textContent = '0 / 2000';
  const m = document.getElementById('csMeter'); if (m) m.style.width = '0';
  form.querySelectorAll('.cs-chip').forEach((c, i) => c.classList.toggle('is-on', i === 0));
  form.classList.remove('is-sent');
  form.style.minHeight = '';
}


/** Contact page: copy email button */
document.querySelectorAll('.cs-copy').forEach((btn) => btn.addEventListener('click', async () => {
  const text = btn.dataset.copy;
  try { await navigator.clipboard.writeText(text); }
  catch (e) { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); }
  btn.classList.add('is-copied');
  btn.querySelector('span').textContent = 'Copied!';
  btn.querySelector('i').className = 'bi bi-check2';
  setTimeout(() => {
    btn.classList.remove('is-copied');
    btn.querySelector('span').textContent = 'Copy';
    btn.querySelector('i').className = 'bi bi-clipboard';
  }, 1800);
}));

/* Scribe + Rx "How it works" – start animations when the section is visible */
(function () {
  var secs = document.querySelectorAll('.sf');
  if (!secs.length) return;
  if (!('IntersectionObserver' in window)) { secs.forEach(function (s) { s.classList.add('sf-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('sf-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  secs.forEach(function (s) { io.observe(s); });
})();
