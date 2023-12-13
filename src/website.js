

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



// jQuery ready function for carousel 
$(document).ready(function(){
  $('#customCarousel, #myCarousel').carousel({
    interval: 5000 // Changes the slide every 5 seconds
  });
});


//Create Account 
console.log('Attempting to create account...');
function createAccount() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  
const address = document.getElementById('address').value;
  const contactNo = document.getElementById('contactNo').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const

confirmPassword = document.getElementById('confirmPassword').value;


  
if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/create-account');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 201) {
      alert('Account created successfully');
    } else {
      alert('Failed to create account');
    }
  };
  xhr.send(JSON.stringify({
    firstName,
    lastName,
    address,
    contactNo,
    email,
    password,
  }));
}