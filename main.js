// Select elements
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu and close icons
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle between menu and close icons
    navbar.classList.toggle('active'); // Show/hide the navbar
};

// Reset menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x'); // Reset to menu icon on scroll
    navbar.classList.remove('active'); // Hide the navbar on scroll
};
