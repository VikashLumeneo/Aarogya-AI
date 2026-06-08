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
  document.getElementById('signupModal').classList.add('open');
  document.getElementById('signupEmail').focus();
}

function closeSignup() {
  document.getElementById('signupModal').classList.remove('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('signupModal')) closeSignup();
}

function submitSignup() {
  const email = document.getElementById('signupEmail').value;
  if (!email || !email.includes('@')) {
    showToast('⚠️ Please enter a valid work email address', 'warning');
    return;
  }
  closeSignup();
  showToast('🎉 Welcome to Anviq! Check your email to activate your account.');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSignup();
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
