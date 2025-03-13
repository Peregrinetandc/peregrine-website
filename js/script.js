document.addEventListener('DOMContentLoaded', function() {

    // --- Helper Functions ---
    function displayError(inputElement, message) {
        // Create a GSAP timeline for a more engaging error display
        const tl = gsap.timeline();

        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        errorSpan.textContent = message;
        inputElement.classList.add('input-error');
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);

        // Animate the input field with a shake and color change
        tl.to(inputElement, {
            x: 10,
            duration: 0.1,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut",
        })
        .to(inputElement, {
            backgroundColor: "#f8d7da", // Light red background
            duration: 0.2,
        }, "-=0.2") // Overlap with the shake
        .from(errorSpan, {  // Animate error message appearance
             opacity: 0,
             y: -10,
             duration: 0.3,
             ease: "power2.out"
        }, "-=0.1"); // Slight delay


        inputElement.focus();
    }

    function clearError(inputElement) {
        inputElement.classList.remove('input-error');
        // Use GSAP to animate error removal
        const errorSpan = inputElement.parentNode.querySelector('.error-message');
        if (errorSpan) {
            gsap.to(errorSpan, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => errorSpan.remove() // Remove after animation
            });
            gsap.to(inputElement, {  // Animate input field back to normal
                backgroundColor: "",  // Remove background color
                duration: 0.3
            });
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displaySuccessMessage(formElement) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        formElement.parentNode.insertBefore(successMessage, formElement.nextSibling);


        // Use GSAP for a nice fade-in/fade-out effect
        gsap.fromTo(successMessage, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {  // Chain another animation for fade-out
                gsap.to(successMessage, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    delay: 4,  // Wait 4 seconds before fading out
                    ease: "power2.in",
                    onComplete: () => successMessage.remove() // Remove after fade-out
                });
            }
        });
    }

    // --- Header Loading ---
    function loadHeader() {
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
                 // GSAP animation for the header loading
                gsap.from(".site-header", {
                    opacity: 0,
                    y: -50,
                    duration: 1,
                    ease: "power3.out",
                    onComplete: () => {  // Ensure listeners are added AFTER animation
                      addMenuToggleListeners();
                      updateActiveNavLink();
                    }
                });
            })
            .catch(error => {
                console.error('Error loading header:', error);
                // Display error with animation
                const errorDiv = document.createElement('div');
                errorDiv.classList.add('header-error');
                errorDiv.textContent = 'Error loading header. Please refresh the page.';
                document.getElementById('header-placeholder').appendChild(errorDiv);

                gsap.from(errorDiv, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: "power2.out"
                });

            });
    }


    // --- Mobile Menu Toggle ---
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');

        // GSAP animation for the menu toggle
        gsap.fromTo(navLinks, {
            opacity: 0,
            x: -20
        }, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }

    function addMenuToggleListeners() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', toggleMenu);
        }
      // --- Mobile Submenu Toggle ---
        document.querySelectorAll('.has-submenu > a').forEach(link => {
        link.addEventListener('click', function(event) {
            // Only prevent default if on mobile (where submenus are handled differently)
            if (window.innerWidth <= 767) {
                event.preventDefault();
                const submenu = this.nextElementSibling; // Get the .sub-menu
                const parentLi = this.parentElement;    // Get the .has-submenu <li>

                // Toggle visibility of the submenu with GSAP
                if (submenu) {
                    if (submenu.classList.contains('show-sub-menu')) {
                        // Hide submenu
                        gsap.to(submenu, {
                            height: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.in",
                            onComplete: () => {
                                submenu.classList.remove('show-sub-menu');
                                parentLi.classList.remove('active');
                                submenu.style.height = '';  // Reset height
                                submenu.style.opacity = ''; // Reset opacity
                            }
                        });
                    } else {
                      // Show submenu
                        submenu.classList.add('show-sub-menu');  // Add class first to get height
                        parentLi.classList.add('active');      // Add active class on parent
                        gsap.fromTo(submenu, {
                            height: 0,
                            opacity: 0,
                        }, {
                            height: "auto", // Animate to auto height
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }
          });
        });
    }

    // --- Active Navigation Link Highlighting ---
    function updateActiveNavLink() {
      const path = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-links a');

      navLinks.forEach(link => {
          const wasActive = link.classList.contains('active'); // Store previous state
          link.classList.remove('active');
          const href = link.getAttribute('href');

          if (path === '/' || path.endsWith('index.html')) {
                if (href === '/') {
                    link.classList.add('active');
                }
            }
            else if (path.endsWith(href)) {
                link.classList.add('active');
            }
             // Special case for #our-services on the home page
            else if ((path === '/' || path.endsWith('index.html')) && href === '#our-services') {
                link.classList.add('active');
            }


          // Add GSAP animation if the active state changed
          if (wasActive !== link.classList.contains('active')) {
              if (link.classList.contains('active')) {
                  gsap.fromTo(link, { color: link.style.color || 'initial' }, { // Animate color
                      color: "var(--accent-color)",
                      duration: 0.3,
                      ease: "power2.out"
                  });
              } else {
                   gsap.to(link, { // Animate back to the default color
                      color:  "var(--text-color)", // Or whatever your default link color is
                      duration: 0.3,
                      ease: "power2.in"
                  });
              }
          }
      });
  }


    // --- Slider ---
    function initSlider() {
        const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.slider-btn.prev');
        const nextButton = document.querySelector('.slider-btn.next');

        if (!slider || !prevButton || !nextButton) {
            console.warn("Slider elements not found. Skipping slider initialization.");
            return; // Exit if slider elements are missing
        }

        const images = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg',
            // Add more image paths as needed
        ];

        let currentSlide = 0;

        // Dynamically create slides
        images.forEach(imagePath => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = "Slider Image"; // Add alt text for accessibility
            slide.appendChild(img);
            slider.appendChild(slide);
        });


        function showSlide(index) {
            if (index < 0) {
                currentSlide = images.length - 1;
            } else if (index >= images.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }

            const translateValue = -currentSlide * 100 + '%';
            // slider.style.transform = 'translateX(' + translateValue + ')'; //Removed Default style

             // GSAP animation for sliding
            gsap.to(slider, {
                x: translateValue,
                duration: 0.8,
                ease: "power3.out"
            });
        }

        // Add GSAP animations for button clicks
        prevButton.addEventListener('click', () => {
            gsap.fromTo(prevButton, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
            showSlide(currentSlide - 1);
        });
        nextButton.addEventListener('click', () => {
            gsap.fromTo(nextButton, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
            showSlide(currentSlide + 1);
        });


        // Initial slide
        showSlide(currentSlide);

         // Auto-advance the slider every 5 seconds (optional)
        let autoSlideInterval = setInterval(() => {
          showSlide(currentSlide + 1);
        }, 5000);
    }


    // --- "Load More Details" ---

    function loadMoreDetails() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        const moreDetailsDiv = document.getElementById('more-details');

        if (!loadMoreBtn || !moreDetailsDiv) return; // Exit if elements are missing


        loadMoreBtn.addEventListener('click', function() {
            // Add a "loading" animation to the button
            gsap.to(loadMoreBtn, {
                scale: 0.9,
                duration: 0.2,
                yoyo: true,
                repeat: -1, // Repeat indefinitely
                ease: "power1.inOut"
            });


            fetch('more-details.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    gsap.killTweensOf(loadMoreBtn);  // Stop the loading animation
                    loadMoreBtn.style.transform = '';   // Reset the button's style
                    loadMoreBtn.style.display = 'none';

                    const detailsFragment = document.createDocumentFragment(); // Use a fragment for efficiency

                    data.details.forEach(detailHtml => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = detailHtml;
                        // Animate each detail element as it's added
                        gsap.fromTo(tempDiv, {opacity: 0, y: 20}, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            delay: 0.1 * data.details.indexOf(detailHtml), // Staggered appearance
                            onComplete: () => {
                                detailsFragment.appendChild(tempDiv);
                                  // Check if this is the last detail element
                                  if (data.details.indexOf(detailHtml) === data.details.length -1){
                                    moreDetailsDiv.appendChild(detailsFragment);
                                    moreDetailsDiv.style.display = 'block';
                                  }
                                }
                            });
                       });

                })
                .catch(error => {
                    console.error('Error loading more details:', error);
                    gsap.killTweensOf(loadMoreBtn); // Stop animation on error
                    loadMoreBtn.style.transform = '';  // Reset the button style
                    // Display error with animation
                    const errorP = document.createElement('p');
                    errorP.classList.add('error-message');
                    errorP.textContent = 'Error loading more details. Please try again later.';
                    moreDetailsDiv.appendChild(errorP);

                    gsap.from(errorP, {
                        opacity: 0,
                        y: -20,
                        duration: 0.5,
                        ease: "power2.out"
                    });

                    moreDetailsDiv.style.display = 'block';
                });
        });
    }


    // --- Form Validation ---

    function setupFormValidation() {
        const contactForm = document.querySelector('.contact-form');
        if (!contactForm) return; // Exit if form not found

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default submission

            // Clear previous errors (with animation)
            const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
            inputs.forEach(clearError);

            let hasErrors = false;
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const messageInput = contactForm.querySelector('#message');

            if (nameInput.value.trim() === '') {
                displayError(nameInput, 'Name is required.');
                hasErrors = true;
            }

            if (emailInput.value.trim() === '') {
                displayError(emailInput, 'Email is required.');
                hasErrors = true;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                hasErrors = true;
            }

            if (messageInput.value.trim() === '') {
                displayError(messageInput, 'Message is required.');
                hasErrors = true;
            }

            if (!hasErrors) {
               const submitButton = contactForm.querySelector('button[type="submit"]');

                // Disable the submit button and show a loading animation
                submitButton.disabled = true;
                gsap.to(submitButton, {
                  scale: 0.9,
                  duration: 0.2,
                  yoyo: true,
                  repeat: -1,  // Infinite repeat
                  ease: "power1.inOut"
                });


                // Form is valid, submit via Netlify (since you're using data-netlify="true")
                const formData = new FormData(contactForm);

                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(response => {
                    // Re-enable the button and stop animation, regardless of success/failure
                    gsap.killTweensOf(submitButton);
                    submitButton.disabled = false;
                    submitButton.style.transform = ''; // Reset style

                    if (response.ok) {
                       displaySuccessMessage(contactForm);
                        contactForm.reset(); // Clear the form
                    } else {
                         displayError(messageInput,"An error occoured. Please try again");
                    }
                })
                .catch(error => {
                   // Re-enable button and stop animation on error
                  gsap.killTweensOf(submitButton);
                  submitButton.disabled = false;
                   submitButton.style.transform = '';
                  displayError(messageInput,"An error occoured. Please try again");
                });
            }
        });
    }


    // --- GSAP Animations