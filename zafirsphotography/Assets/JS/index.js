document.getElementById("currentYear").innerText = new Date().getFullYear();

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
