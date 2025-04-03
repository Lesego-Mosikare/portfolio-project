// Select the navbar toggle button and the menu
const toggleButton = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Add an event listener to toggle the menu visibility
toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});