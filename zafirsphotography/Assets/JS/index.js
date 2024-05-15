// document.getElementById("currentYear").textContent = new Date().getFullYear();

// animations

    // Wait for navbar animation to finish
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('animationend', () => {
        // Trigger icon animation
        const socialIcons = document.querySelector('.social-icons');
        socialIcons.classList.add('animate-icons');
    }, { once: true }); // Ensure the event listener only runs once
xt = new Date().getFullYear();

// navbar

// content scroll

// update navbar

$(document).ready(function() {
  // Highlight active section in navbar
  $(window).on('scroll', function() {
      var scrollPosition = $(window).scrollTop();

      $('.section').each(function() {
          var sectionOffset = $(this).offset().top - 50; // Adjusted offset to trigger earlier
          var sectionHeight = $(this).outerHeight();
          var sectionId = $(this).attr('id');
          var navItem = $('.navbar-nav').find('[href="#' + sectionId + '"]');
          
          if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
              navItem.addClass('active');
          } else {
              navItem.removeClass('active');
          }
      });
  });
});


function playAudio(audioUrl) {
  var audio = new Audio(audioUrl);
  audio.play();
}



//  section active?

function isSectionActive(sectionId) {
  var section = document.getElementById(sectionId);
  if (!section) {
      console.error("Section with id '" + sectionId + "' not found.");
      return false;
  }

  var bounding = section.getBoundingClientRect();

  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('load', function() {
  if (isSectionActive("home")) {
      console.log("The section is active!");
  } else {
      console.log("The section is not active.");
  }
});


// navbar colour change

// Function to update navbar text color based on section intersection
function updateNavbarColor(entries) {
    const navbarLinks = document.querySelectorAll('.navbar li a');
    const isIntersecting = entries.some(entry => entry.isIntersecting);
    if (isIntersecting) {
        navbarLinks.forEach(link => {
            link.style.color = 'black'; // Change text color to black
        });
    } else {
        navbarLinks.forEach(link => {
            link.style.color = 'white'; // Change text color back to normal
        });
    }
}

// Intersection observer configuration
const observerOptions = {
    rootMargin: '-0% 0px', // Adjust this margin as needed
};

// Create the intersection observer
const observer = new IntersectionObserver(updateNavbarColor, observerOptions);

// Observe the white sections
const whiteSections = document.querySelectorAll('.white-section');
whiteSections.forEach(section => {
    observer.observe(section);
});


// scrolling 

// // Disable scrolling with the mouse wheel
// window.addEventListener('wheel', function(event) {
//     event.preventDefault();
// }, { passive: false });

// // Disable scrolling with touch gestures (fingers)
// window.addEventListener('touchmove', function(event) {
//     event.preventDefault();
// }, { passive: false });

// Smooth scroll to section when navbar links are clicked
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// tools animation
document.addEventListener('DOMContentLoaded', function() {
    // Animation observer configuration
    const observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold value as needed
    };
  
    // Callback function to handle intersection changes
    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is intersecting with the viewport
                if (entry.target.classList.contains('about-section')) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.add('animate-fly-in');
                }
            } else {
                // If the section is not intersecting with the viewport
                if (entry.target.classList.contains('about-section')) {
                    entry.target.classList.remove('fade-in');
                } else {
                    entry.target.classList.remove('animate-fly-in');
                }
            }
        });
    }
  
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersect, observerConfig);
  
    // Target the elements to be observed for fly-in animation
    const sectionsToAnimate = document.querySelectorAll('.fly-in-left, .fly-in-right');
  
    // Start observing each target element for fly-in animation
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
  
    // Target the About Me section for fade-in animation
    const aboutSection = document.querySelector('.about-section');
  
    // Start observing the About Me section for fade-in animation
    observer.observe(aboutSection);
});
