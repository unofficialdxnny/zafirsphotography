document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    var navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var sectionId = link.getAttribute('data-section');
            document.querySelectorAll('.content-section').forEach(function (section) {
                section.classList.remove('active-section');
            });
            document.getElementById(sectionId).classList.add('active-section');
        });
    });
});
