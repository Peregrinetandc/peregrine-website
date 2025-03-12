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

    // Add event listeners for the menu toggle (must be done *after* the header is loaded)
    function addMenuToggleListeners() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', toggleMenu);
        }
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
            else if ((path === '/' || path.endsWith('index.html')) && href === '#our-services') {
                link.classList.add('active');
            }
        });
    }
    // --- Smooth Scrolling ---

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Form Submission ---

    function handleFormSubmit(form) {
        if (!form) return;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formElements = form.elements;
            let isValid = true;

            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].tagName === "INPUT" || formElements[i].tagName === "SELECT" || formElements[i].tagName === "TEXTAREA")
                    clearError(formElements[i]);
            }

            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (field.value.trim() === '') {
                    displayError(field, 'This field is required.');
                    isValid = false;
                }
            });

            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && !isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            if (isValid) {
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        displaySuccessMessage(form);
                        form.reset();
                    } else {
                        return response.json().then(data => { throw new Error(data.message || 'Server error'); });
                    }
                })
                .catch(error => {
                    displayError(form, `Error: ${error.message}`);
                });
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        handleFormSubmit(contactForm);
    }
    const orientationForm = document.getElementById('orientation-interest-form');
    if (orientationForm) {
        handleFormSubmit(orientationForm);
    }

    // --- Image Slider ---
    function initializeSlider() {
        let slideIndex = 0;
        const slides = document.getElementsByClassName("slide");
        const prevButton = document.querySelector('.slider-btn.prev');
        const nextButton = document.querySelector('.slider-btn.next');
        let slideInterval;

        function showSlides() {
            if (slides.length === 0) return;

            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }

            slides[slideIndex - 1].classList.add("active");
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

        function nextSlide() {
            slideIndex++;
            showSlidesManual()
        }

        function prevSlide() {
            slideIndex--;
           showSlidesManual()
        }

        function startSlider() {
            if (slides.length > 0) {
                showSlides();
                slideInterval = setInterval(showSlides, 4000);
            }
        }

        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }

        startSlider(); // Start the slider *after* defining all functions
    }
    // --- Load More Details ---

    function initializeLoadMore() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        const moreDetailsDiv = document.getElementById('more-details');

        if (loadMoreBtn && moreDetailsDiv) {
            loadMoreBtn.addEventListener('click', function() {
                fetch('data/more-details.json')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Network response was not ok: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        moreDetailsDiv.innerHTML = data.content;
                        loadMoreBtn.style.display = 'none';
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        moreDetailsDiv.innerHTML = `<p>Error loading details: ${error.message}</p>`;
                    });
            });
        }
    }
    // --- GSAP Animations ---

     function initializeGSAPAnimations() {
        if (typeof gsap !== 'undefined') {
            gsap.from(".hero-container h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
            gsap.from(".hero-container h2", { duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.5 });
            gsap.from(".hero-container p", { duration: 1, opacity: 0, ease: "power2.out", delay: 1 });
            gsap.from(".hero-container .button", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out(1.7)", delay: 1.5 });

            gsap.utils.toArray("section").forEach(section => {
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
    }
    // --- Initialize Everything ---
    loadHeader();       // Load the header (must be first)
    initializeSlider();  // Initialize slider (if present on the page)
    initializeLoadMore(); // Set up "load more" (if present)
    initializeGSAPAnimations(); // Initialize GSAP animations

});