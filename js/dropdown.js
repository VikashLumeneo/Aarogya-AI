/**
 * Products navigation dropdown
 */
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('productsDropdown');
  const trigger = dropdown.querySelector('#nav-products');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  dropdown.querySelectorAll('.nav-dropdown-item').forEach((item) => {
    item.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });
  });
});
