document.addEventListener('DOMContentLoaded', function() {
    // --- Helper Functions (Defined first for clarity) ---

    /**
     * Displays an error message next to an input element.
     * @param {HTMLElement} inputElement The input element where the error occurred.
     * @param {string} message The error message to display.
     */
    function displayError(inputElement, message) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message'); // Use the CSS class for styling
        errorSpan.textContent = message;
        inputElement.classList.add('input-error'); // Add error class to input for styling
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling); // Insert *after* input
        inputElement.focus(); // Set focus to the input with the error
    }

    /**
     * Clears any error messages and styling associated with an input element.
     * @param {HTMLElement} inputElement The input element to clear errors from.
     */
    function clearError(inputElement) {
        inputElement.classList.remove('input-error');
        const errorSpan = inputElement.parentNode.querySelector('.error-message');
        if (errorSpan) {
            errorSpan.remove();
        }
    }

    /**
     * Validates an email address (basic check).
     * @param {string} email The email address to validate.
     * @returns {boolean} True if the email is valid, false otherwise.
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Displays a success message after a successful form submission.
     * @param {HTMLElement} formElement The form element.
     */
     function displaySuccessMessage(formElement) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        formElement.parentNode.insertBefore(successMessage, formElement.nextSibling);  //insert after form

        // Remove the success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }


    // --- Smooth Scrolling ---

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) { // Check if the target element exists
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Contact Form Validation and Submission ---

    const contactForm = document.getElementById('contact-form');

    if (contactForm) { // Check if the form exists (important for other pages)
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            let isValid = true;

            // Reset previous error messages and styles
            clearError(nameInput);
            clearError(emailInput);
            clearError(messageInput);

            // Validate Name
            if (nameInput.value.trim() === '') {
                displayError(nameInput, 'Please enter your name.');
                isValid = false;
            }

            // Validate Email
            if (emailInput.value.trim() === '') {
                displayError(emailInput, 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                displayError(messageInput, 'Please enter a message.');
                isValid = false;
            }

            // If all validations pass, submit the form (using Fetch API)
            if (isValid) {
                fetch(contactForm.action, {  // Use Fetch for AJAX submission
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'  // For Netlify Forms
                    }
                })
                .then(response => {
                    if (response.ok) {
                        displaySuccessMessage(contactForm); // Show success message
                        contactForm.reset(); // Clear the form
                    } else {
                        // Handle server errors
                        return response.json().then(data => { throw new Error(data.message || 'Server error'); });
                    }
                })
                .catch(error => {
                    // Handle network or other errors
                    displayError(contactForm, `Error: ${error.message}`);
                });
            }
        });
    }


    // --- Image Slider ---
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide"); // Get all slide elements
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');
    let slideInterval; // Store the interval ID

    function showSlides() {
        if (slides.length === 0) return; // Don't run if there are no slides

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        // Increment slide index, wrapping around to the beginning if necessary
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }

        // Show the current slide
        slides[slideIndex - 1].classList.add("active");
    }

    function nextSlide() {
        slideIndex++;
        showSlidesManual();
    }

    function prevSlide() {
        slideIndex--;
        showSlidesManual();
    }
    function showSlidesManual() {
        if (slides.length === 0) return;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }

        slides[slideIndex - 1].classList.add("active");
    }
    function startSlider() {
      if (slides.length > 0) {
        showSlides(); // Initial display
        slideInterval = setInterval(showSlides, 4000); // Change image every 4 seconds
      }
    }
     // Event listeners for prev/next buttons (only if they exist)
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    // --- Load More Details (using Fetch) ---

    const loadMoreBtn = document.getElementById('load-more-btn');
    const moreDetailsDiv = document.getElementById('more-details');

    if (loadMoreBtn && moreDetailsDiv) { // Check if *both* elements exist
        loadMoreBtn.addEventListener('click', function() {
            fetch('data/more-details.json')  // Relative path to your JSON file
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    moreDetailsDiv.innerHTML = data.content; // Insert the content
                    loadMoreBtn.style.display = 'none'; // Hide the button
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    moreDetailsDiv.innerHTML = `<p>Error loading details: ${error.message}</p>`;
                });
        });
    }


    // --- GSAP Animations ---

    if (typeof gsap !== 'undefined') { // Check if GSAP is loaded
        gsap.from(".hero-container h1", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
        gsap.from(".hero-container h2", {duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.5});
        gsap.from(".hero-container p", {duration: 1, opacity: 0, ease: "power2.out", delay: 1});
        gsap.from(".hero-container .button", {duration: 1, scale: 0.5, opacity: 0, ease: "back.out(1.7)", delay: 1.5});

        // Animate sections on scroll
        gsap.utils.toArray("section").forEach(section => { // Use gsap.utils.toArray for better compatibility
            gsap.from(section, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
    }


    // --- Header Loading and Navigation ---

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

                // --- Mobile Menu Toggle (inside loadHeader, after header is loaded) ---
                const menuToggle = document.querySelector('.menu-toggle');
                const navLinks = document.querySelector('.nav-links');

                if (menuToggle && navLinks) { // Check for existence
                    menuToggle.addEventListener('click', function() {
                        navLinks.classList.toggle('show');
                    });
                }
                 // --- Active Navigation Link Highlighting ---
                updateActiveNavLink();
                startSlider();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                document.getElementById('header-placeholder').innerHTML = '<p>Failed to load header.</p>';
            });
    }

    function updateActiveNavLink() {
        const path = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove from all links

            const href = link.getAttribute('href');

            // Handle homepage
            if (path === '/' || path.endsWith('/index.html')) {
                if (href === '/') {
                    link.classList.add('active');
                }
            }
            // Handle other pages
            else if (path.endsWith(href)) {
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
    // Initial call
    loadHeader();
});