/**
 * Pricing comparison table column highlighting
 */
document.addEventListener('DOMContentLoaded', () => {
  let activeCol = 2;
  let hoveredCol = null;
  const cells = document.querySelectorAll('[data-col]');

  function update() {
    const current = hoveredCol !== null ? hoveredCol : activeCol;

    cells.forEach((el) => {
      const col = Number(el.dataset.col);

      if (col === 2) {
        el.style.background = '#1E2B6A';
        el.style.color = '#fff';
        el.classList.remove('col-active');
      } else if (col === current) {
        el.style.background = '';
        el.classList.add('col-active');
      } else {
        el.style.background = '';
        el.style.color = '';
        el.classList.remove('col-active');
      }
    });
  }

  cells.forEach((el) => {
    const col = Number(el.dataset.col);

    el.addEventListener('mouseenter', () => {
      hoveredCol = col;
      update();
    });

    el.addEventListener('mouseleave', () => {
      hoveredCol = null;
      update();
    });

    el.addEventListener('click', () => {
      activeCol = col;
      update();
    });
  });

  update();
});

/** Opens the shared signup modal from radiology pricing cards */
function openModal(plan) {
  openSignup(plan === 'early-access' ? 'Early Access' : plan || 'Plan');
}
