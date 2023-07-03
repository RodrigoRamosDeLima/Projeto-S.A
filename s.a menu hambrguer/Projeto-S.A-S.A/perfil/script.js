const menuCheckbox = document.getElementById('menu-checkbox');
const menuItems = document.getElementById('menu-items');

menuCheckbox.addEventListener('change', () => {
  menuItems.style.display = menuCheckbox.checked ? 'block' : 'none';
});