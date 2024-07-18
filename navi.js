const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.navmenu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuIcon.classList.toggle('bx-x'); // Toggle your menu icon class here
});
