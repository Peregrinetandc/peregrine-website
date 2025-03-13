document.addEventListener('DOMContentLoaded', function() {

    // --- Helper Functions ---
    function displayError(inputElement, message) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        errorSpan.textContent = message;
        inputElement.classList.add('input-error');
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);
        inputElement.focus();
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

    function displaySuccessMessage(formElement) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        formElement.parentNode.insertBefore(successMessage, formElement.nextSibling);

        setTimeout(() => {
            successMessage.remove();
        }, 5000);
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
                addMenuToggleListeners(); // Call *after* header is loaded
                updateActiveNavLink();    // Call *after* header is loaded
            })
            .catch(error => {
                console.error('Error loading header:', error);
                document.getElementById('header-placeholder').innerHTML = '<div class="header-error">Error loading header. Please refresh the page.</div>';
            });
    }

    // --- Mobile Menu Toggle ---
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
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

                // Toggle visibility of the submenu
                if (submenu) {
                    submenu.classList.toggle('show-sub-menu'); // Add/remove class
                    parentLi.classList.toggle('active');      // Add/remove active class on parent
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
            slider.style.transform = 'translateX(' + translateValue + ')';
        }

        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

        // Initial slide
        showSlide(currentSlide);
    }


    // --- "Load More Details" ---

    function loadMoreDetails() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        const moreDetailsDiv = document.getElementById('more-details');

        if (!loadMoreBtn || !moreDetailsDiv) return; // Exit if elements are missing

        loadMoreBtn.addEventListener('click', function() {
            fetch('more-details.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    data.details.forEach(detailHtml => {
                        moreDetailsDiv.innerHTML += detailHtml;
                    });
                    moreDetailsDiv.style.display = 'block'; // Show the div
                    loadMoreBtn.style.display = 'none'; // Hide the button
                })
                .catch(error => {
                    console.error('Error loading more details:', error);
                    moreDetailsDiv.innerHTML = '<p class="error-message">Error loading more details. Please try again later.</p>';
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

            // Clear previous errors
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
                // Form is valid, submit via Netlify (since you're using data-netlify="true")
                const formData = new FormData(contactForm);

                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(response => {
                    if (response.ok) {
                       displaySuccessMessage(contactForm);
                        contactForm.reset(); // Clear the form
                    } else {
                         displayError(messageInput,"An error occoured. Please try again");
                    }
                })
                .catch(error => {
                     displayError(messageInput,"An error occoured. Please try again");
                });
            }
        });
    }


    // --- GSAP Animations ---

    function initGSAPAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Animate hero section elements
        gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
        gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.from("#hero p", { opacity: 0, y: -50, duration: 1, delay: 1, ease: "power3.out" });
        gsap.from("#hero .button", { opacity: 0, y: 50, duration: 1, delay: 1.5, ease: "power3.out" });

        // Animate section headings on scroll
        document.querySelectorAll('.content-section h2').forEach(heading => {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: "top 80%", // Trigger when top of heading is 80% in view
                },
                opacity: 0,
                y: -30,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Animate services grid items on scroll (example)
        document.querySelectorAll('.services-grid .service').forEach((service, index) => {
            gsap.from(service, {
                scrollTrigger: {
                    trigger: service,
                    start: "top 80%",
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                delay: index * 0.2, // Stagger the animations
                ease: "power2.out"
            });
        });

        // Animate the "Our Story" section
        gsap.from("#our-story p", {
            scrollTrigger: {
                trigger: "#our-story p",
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2 // Stagger the animation of each paragraph
        });

        // Animate the "Our Project" section
        gsap.from("#our-project .project-list li", {
            scrollTrigger: {
                trigger: "#our-project .project-list",
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
        });

           // Animate the client logos
        gsap.from("#our-clients .client-logo", {
            scrollTrigger: {
                trigger: "#our-clients .clients-grid",
                start: "top 80%",
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.2,
        });

        gsap.from("#mission-motivation .mission, #mission-motivation .motivation, #mission-motivation .values", {
            scrollTrigger: {
                trigger: "#mission-motivation",
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });

        gsap.from("#contact .contact-info", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 80%",
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out",
        });
    }

      // Smooth Scrolling
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calculate the offset.  This is crucial for fixed headers.
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // --- Initialization ---

    loadHeader();       // Load the header
    initSlider();       // Initialize the slider
    loadMoreDetails(); // Set up "Load More Details"
    setupFormValidation(); // Form validation
    initGSAPAnimations();    // Start GSAP animations
    smoothScroll();

});