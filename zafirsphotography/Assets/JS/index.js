document.getElementById("currentYear").innerText = new Date().getFullYear();

// navbar

document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-item");

  navbarLinks.forEach(link => {
      link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = e.target.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: "smooth" });
      });
  });
});