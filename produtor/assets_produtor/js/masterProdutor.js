//vnavbar 
const btnMenu = document.getElementById('btn-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.closest('#btn-menu')) {
        navbar.classList.remove('active');
    }
});