const mediaQuery = window.matchMedia('(max-width: 576px)');
const mediaDesktop = window.matchMedia('(min-width: 578px)');
const desktop = document.querySelector('.desktop')
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const innovationTitle = document.querySelector('.innovation-title');
const innovationP = document.querySelector('.innovation-p');
const arrow = document.querySelector('#arrow');
let clicks = 0;

function click() {
    leftArrow.addEventListener('click', () => {
        clicks--;
        if (clicks == 0) {
            desktop.src = 'images/desktop-image-hero-1.jpg';
            innovationTitle.innerHTML = 'Discover innovative ways to decorate';
            innovationP.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
            arrow.style.top = '3.55em';
        }
        else if (clicks == 1) {
            desktop.src = 'images/desktop-image-hero-2.jpg';
            innovationTitle.innerHTML = 'We are available all across the globe';
            innovationP.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            arrow.style.top = '3.55em';
        }

    })
    rightArrow.addEventListener('click', () => {
        clicks++;
        if (clicks == 1) {
            desktop.src = 'images/desktop-image-hero-2.jpg';
            innovationTitle.innerHTML = 'We are available all across the globe';
            innovationP.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            arrow.style.top = '3.55em';
        }
        else if (clicks == 2) {
            desktop.src = 'images/desktop-image-hero-3.jpg';
            innovationTitle.innerHTML = 'Manufactured with the best materials';
            innovationP.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office"
            arrow.style.top = '2.89em';
        }

    })
}
function mobile() {
    leftArrow.addEventListener('click', () => {
        clicks--;
        if (clicks == 0) {
            desktop.src = 'images/mobile-image-hero-1.jpg';
            arrow.style.top = '-18.6em';
        }
        else if (clicks == 1) {
            desktop.src = 'images/mobile-image-hero-2.jpg';
            arrow.style.top = '-18.6em';
        }
    })
    rightArrow.addEventListener('click', () => {
        clicks++;
        if (clicks == 1) {
            desktop.src = 'images/mobile-image-hero-2.jpg';
            arrow.style.top = '-18.6em';
        }
        else if (clicks == 2) {
            desktop.src = 'images/mobile-image-hero-3.jpg';
            arrow.style.top = '-18.6em';
        }
    })
}
if (mediaDesktop.matches) {
    click();
}
if (mediaQuery.matches) {
    desktop.src = 'images/mobile-image-hero-1.jpg';
    mobile();
}

