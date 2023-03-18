
//  function that adds a "header_active" class to an element with the class "header" when the user scrolls more than 50 pixels from the top of the page



(function () { // self-calling function
    const header = document.querySelector('.header')// receive the element we want to work with(class header)
    window.onscroll = () => { // the function works when scrolling 
        if (window.pageYOffset > 50) { // scrolling distance from header
            header.classList.add('header_active') // header active was created first in CSS
            // header_active is added when pageOffset > 50
        } else { // what happens if statement is false
            header.classList.remove('header_active')
        }
    }

}());

// Burger handler 

(function () {  // self-calling function
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => { // action, called when clicked

        menu.classList.add('header__nav_active'); // when clicked header__nav_active links to .header__nav  
    });
    menuCloseItem.addEventListener('click', () => { // same function but when closing the burger(pressing the cross)
        menu.classList.remove('header__nav_active'); // when clicked on the cross the menu closes
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => { // for every step of cycle [i] is going to change
                menu.classList.remove('header__nav_active');
            });

        }
    }
}());


//Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

