document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});