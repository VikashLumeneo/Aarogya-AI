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

      const resourcesDropdown = document.getElementById('resourcesDropdown');
      if (resourcesDropdown) {
        resourcesDropdown.classList.remove('open');
      }
    });

    productsDropdown.querySelectorAll('.nav-dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        productsDropdown.classList.remove('open');
      });
    });
  }

  // Resources Dropdown
  const resourcesDropdown = document.getElementById('resourcesDropdown');

  if (resourcesDropdown) {
    const resourcesTrigger = resourcesDropdown.querySelector('#nav-resources');

    resourcesTrigger.addEventListener('click', (e) => {
      e.stopPropagation();

      resourcesDropdown.classList.toggle('open');

      const productsDropdown = document.getElementById('productsDropdown');
      if (productsDropdown) {
        productsDropdown.classList.remove('open');
      }
    });

    resourcesDropdown.querySelectorAll('.nav-dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        resourcesDropdown.classList.remove('open');
      });
    });
  }

  // Close all dropdowns on outside click
  document.addEventListener('click', () => {
    const productsDropdown = document.getElementById('productsDropdown');
    const resourcesDropdown = document.getElementById('resourcesDropdown');

    if (productsDropdown) productsDropdown.classList.remove('open');
    if (resourcesDropdown) resourcesDropdown.classList.remove('open');
  });

});
function toggleMobileResources() {
  const menu = document.getElementById('mobileResourcesMenu');

  if (!menu) return;

  menu.style.display =
    menu.style.display === 'block'
      ? 'none'
      : 'block';
}