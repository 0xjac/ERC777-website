function onVisibilityChange(el, callback) {
    let state;
    return function () {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top >= 0;
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