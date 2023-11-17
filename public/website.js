document.addEventListener("DOMContentLoaded", function() {
  // Scroll to the top function
  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Event listener for the Home link
  var homeLink = document.querySelector('a[href="#"]');
  if (homeLink) {
    homeLink.addEventListener('click', scrollToTop);
  }

  // Rest of your event listeners...
});

  // Scroll to the element with smooth animation
  function scrollToElement(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        'behavior': 'smooth',
        'top': targetElement.offsetTop
      });
    }
  }

  // Scroll to the top function
  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 
 
  var toggleMoreOptionsButton = document.getElementById('toggle-more-options');
  if (toggleMoreOptionsButton) {
    toggleMoreOptionsButton.addEventListener('click', function() {
      // Code for showing more options...
    });
  }



// jQuery ready function for carousel (if using jQuery)
$(document).ready(function(){
  $('#customCarousel, #myCarousel').carousel({
    interval: 5000 // Changes the slide every 5 seconds
  });
});
