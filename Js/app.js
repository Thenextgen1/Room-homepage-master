const mediaQuery = window.matchMedia('(max-width: 576px)');
const desktop = document.querySelector('.desktop')

if (mediaQuery.matches) {
    desktop.src = 'images/mobile-image-hero-1.jpg';
}