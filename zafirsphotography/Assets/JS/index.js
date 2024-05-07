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

