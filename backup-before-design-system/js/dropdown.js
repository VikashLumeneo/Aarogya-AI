/**
 * Navigation dropdowns
 */
document.addEventListener('DOMContentLoaded', () => {

  // Products Dropdown
  const productsDropdown = document.getElementById('productsDropdown');

  if (productsDropdown) {
    const productsTrigger = productsDropdown.querySelector('#nav-products');

    productsTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      productsDropdown.classList.toggle('open');
    });

    productsDropdown.querySelectorAll('.nav-dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        productsDropdown.classList.remove('open');
      });
    });
  }

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    const productsDropdown = document.getElementById('productsDropdown');
    if (productsDropdown) productsDropdown.classList.remove('open');
  });

});