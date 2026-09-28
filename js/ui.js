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
const API_BASE =
  location.protocol === 'file:' || location.port === '5502' || location.port === '5500'
    ? 'http://localhost:3000'
    : '';

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
  const out = await res.json().catch(() => ({}));
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
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.card, .product-card, .testimonial-card, .pricing-card, .resource-card, .team-card')
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
