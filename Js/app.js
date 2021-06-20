const mediaQuery = window.matchMedia('(max-width: 576px)');
const desktop = document.querySelector('.desktop')
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let clicks = 1;

if (mediaQuery.matches) {
    desktop.src = 'images/mobile-image-hero-1.jpg';
}

function click() {
    leftArrow.addEventListener('click', () => {
        clicks--;
    })
    rightArrow.addEventListener('click', () => {
        clicks++
    })

}
click();

switch (clicks) {
    case 1:
        desktop.src = 'images/desktop-image-hero-1.jpg';
        break;
    case 2:
        desktop.src = 'images/desktop-image-hero-2.jpg';
        break;
    case 3:
        desktop.src = 'images/desktop-image-hero-3.jpg';
        break;
}











// function picSwitch() {
//     if (clicks = 1) {
//         desktop.src = 'images/desktop-image-hero-1.jpg'
//     }
//     else if (clicks = 2) {
//         desktop.src = 'images/desktop-image-hero-2.jpg';
//     }
//     else if (clicks = 3) {
//         desktop.src = 'images/desktop-image-hero-3.jpg'
//     }
//     else if (clicks > 3) {
//         desktop.src = 'images/desktop-image-hero-1.jpg'
//         clicks = 1;
//     }
// }

// picSwitch();