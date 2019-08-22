function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function onVisibilityChange(el, callback) {
    let state;
    return function () {
        let isVisible = isElementInViewport(el);
        if (isVisible !== state) {
            state = isVisible;
            if (typeof callback == 'function') {
                callback(state);
            }
        }
    }
}

const navbarBgHandler = onVisibilityChange(document.getElementById("hero"), function(state) {
    document.getElementById("navbar-main").classList.toggle('transparent-background', state)
});

const navbarBurgerHandler = () => {
    const navbarBurger = 'navbarBurger';
    const $navbarBurger = document.getElementById(navbarBurger);
    const $target = document.getElementById($navbarBurger.dataset.target);

    $navbarBurger.addEventListener('click', () => {
        $navbarBurger.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    });
};

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', navbarBurgerHandler, false);
    addEventListener('DOMContentLoaded', navbarBgHandler, false);
    addEventListener('load', navbarBgHandler, false);
    addEventListener('scroll', navbarBgHandler, false);
    addEventListener('resize', navbarBgHandler, false);
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', navbarBurgerHandler()); // IE9+ :(
    attachEvent('onDOMContentLoaded', navbarBgHandler);
    attachEvent('onload', navbarBgHandler);
    attachEvent('onscroll', navbarBgHandler);
    attachEvent('onresize', navbarBgHandler);
}