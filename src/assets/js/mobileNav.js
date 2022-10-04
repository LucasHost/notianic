const burger = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

burger.addEventListener('click', event => {
    document.body.classList.toggle('show-nav');
});