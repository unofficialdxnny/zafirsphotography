document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('mobile-menu');
    var navLinks = document.getElementById('nav-links');
  
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('open1');
      menuToggle.classList.toggle('open2');
      menuToggle.classList.toggle('open3');
      navLinks.classList.toggle('show');
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('open1', 'open2', 'open3');
      }
    });
  });
  
  