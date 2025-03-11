document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is fully loaded

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target element, accounting for cases where the target might not exist
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // Contact Form Validation and Submission (Enhanced)
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            let isValid = true;

            // Reset previous error messages and styles
            clearError(nameInput);
            clearError(emailInput);
            clearError(messageInput);

            // Name Validation
            if (nameInput.value.trim() === '') {
                displayError(nameInput, 'Please enter your name.');
                isValid = false;
            }

            // Email Validation
            if (emailInput.value.trim() === '') {
                displayError(emailInput, 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            // Message Validation
            if (messageInput.value.trim() === '') {
                displayError(messageInput, 'Please enter a message.');
                isValid = false;
            }


            if (isValid) {
                // Use Fetch API for AJAX submission (modern approach)
                fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm), // Easily handles form data
                    headers: {
                        'Accept': 'application/json', // Expect JSON response (for Netlify)
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // Success!  Display a success message, reset the form, etc.
                        displaySuccessMessage(); // Call a function to display success
                        contactForm.reset();
                    } else {
                        // Handle server errors (e.g., 500 error)
                        return response.json().then(data => { throw new Error(data.message || 'Server error') }) //get the error message
                    }
                })
                .catch(error => {
                    // Handle network errors or errors from the server
                    displayError(contactForm, `Error: ${error.message}`);
                });
            }
        });
    }

    function displayError(inputElement, message) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message'); // Add a class for styling
        errorSpan.textContent = message;
        inputElement.classList.add('input-error'); // Add error class to input
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling); //insert after the input element.
        inputElement.focus(); // Put focus on the error element
    }

    function clearError(inputElement) {
        inputElement.classList.remove('input-error');
        const errorSpan = inputElement.parentNode.querySelector('.error-message');
        if (errorSpan) {
            errorSpan.remove();
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

     function displaySuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        contactForm.parentNode.insertBefore(successMessage, contactForm);

        // Optional: Remove the success message after a few seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000); // 5 seconds
    }



    // Image Slider (Improved with manual controls)
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');

     function showSlides() {
        if (slides.length === 0) return; // No slides, don't do anything

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        if (slideIndex < 1) { slideIndex = slides.length } // Handle going backwards
        slides[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 4000); // Change image every 4 seconds (was 2)
    }

    function nextSlide() {
         //clearTimeout(slideTimeout); // Clear the timeout for automatic slide change
        slideIndex++; // Move to next slide
        showSlidesManual(); // Show slides manually
    }

    function prevSlide() {
        //clearTimeout(slideTimeout);
        slideIndex--;
        showSlidesManual();
    }

    //for manual slide control
    function showSlidesManual() {
        if (slides.length === 0) return;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }

        slides[slideIndex - 1].classList.add("active");
    }

    if (slides.length > 0) {
        showSlides(); // Start the automatic slideshow
    }

     if (prevButton) { // Check if the buttons exists
        prevButton.addEventListener('click', prevSlide);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }




    // Load More Details (using Fetch, with better error handling)
    const loadMoreBtn = document.getElementById('load-more-btn');
    const moreDetailsDiv = document.getElementById('more-details');

    if (loadMoreBtn && moreDetailsDiv) {
        loadMoreBtn.addEventListener('click', function() {
            // Use a relative path if the JSON file is in the same directory
            fetch('data/more-details.json')  //  a JSON file.
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    moreDetailsDiv.innerHTML = data.content; // Access the content
                    loadMoreBtn.style.display = 'none'; // Hide the button
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    moreDetailsDiv.innerHTML = `<p>Error loading details: ${error.message}</p>`;
                });
        });
    }

    // ---  Animations and Interactions (using GSAP - GreenSock Animation Platform) ---

     // Check if GSAP is available. If not, don't run the animation code
    if (typeof gsap !== 'undefined') {
        gsap.from(".hero-container h1", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
        gsap.from(".hero-container h2", {duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.5});
        gsap.from(".hero-container p", {duration: 1, opacity: 0, ease: "power2.out", delay: 1});
        gsap.from(".hero-container .button", {duration: 1, scale: 0.5, opacity: 0, ease: "back.out(1.7)", delay: 1.5});

        // Animate sections on scroll
        const sections = document.querySelectorAll('section'); // Select all sections
        sections.forEach(section => {
            gsap.from(section, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {  // Requires ScrollTrigger plugin
                    trigger: section,
                    start: "top 80%", // Start animation when top of section is 80% in view
                    // markers: true, //for visual debuging
                    toggleActions: "play none none none" //play, pause, resume, reverse, restart, reset, complete, or none
                }
            });
        });

    }
     // Mobile Menu Toggle (Important for navigation)
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }
});

```javascript
  // Function to load the header
  function loadHeader() {
    fetch('header.html') // Fetch the header.html file
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Get the response as text
      })
      .then(data => {
        // Insert the header HTML into the placeholder
        document.getElementById('header-placeholder').innerHTML = data;
         // Add the mobile menu toggle functionality (after header is loaded)
          const menuToggle = document.querySelector('.menu-toggle');
          const navLinks = document.querySelector('.nav-links');

          if(menuToggle){
              menuToggle.addEventListener('click', () => {
              navLinks.classList.toggle('show');
            });
          }
          // Update active navigation link
          updateActiveNavLink();
      })
      .catch(error => {
        console.error('Error loading header:', error);
        document.getElementById('header-placeholder').innerHTML = '<p>Failed to load header.</p>';
      });
  }
  // Function to update the active navigation link
  function updateActiveNavLink() {
      const path = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-links a');

      navLinks.forEach(link => {
          // Remove existing 'active' class
          link.classList.remove('active');

          // For index.html or root, highlight "Home"
          if (path === '/' || path.endsWith('index.html')) {
              if (link.getAttribute('href') === '/') {
                  link.classList.add('active');
              }
          } else if (path.endsWith(link.getAttribute('href'))) {
               // For other pages, highlight the corresponding link
              link.classList.add('active');
          }
           // Special case for the "Services" link on the homepage
          else if (path === '/' || path.endsWith('index.html'))
          {
              if(link.getAttribute('href') === '#our-services'){
                  link.classList.add('active');
              }
          }
      });
  }

  // Call the function to load the header when the DOM is loaded
  document.addEventListener('DOMContentLoaded', loadHeader);
  ```