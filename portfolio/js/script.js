const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');

    // Calculate color values based on scroll position
    const color1 = `rgb(${150 + scrollPosition % 105}, ${50 + scrollPosition % 205}, 255)`;
    const color2 = `rgb(${80 + scrollPosition % 175}, ${scrollPosition % 150}, ${200 + scrollPosition % 55})`;

    // Update the background gradient dynamically
    hero.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});
