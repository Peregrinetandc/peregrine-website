document.addEventListener('DOMContentLoaded', function() {

    // --- Helper Functions ---
    function displayError(inputElement, message) {
        const tl = gsap.timeline();

        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        errorSpan.textContent = message;
        inputElement.classList.add('input-error');
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);

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
        const errorSpan = inputElement.parentNode.querySelector('.error-message');
        if (errorSpan) {
            gsap.to(errorSpan, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => errorSpan.remove()
            });
            gsap.to(inputElement, {
                backgroundColor: "",
                duration: 0.3
            });
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\@[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displaySuccessMessage(formElement) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        formElement.parentNode.insertBefore(successMessage, formElement.nextSibling);

        gsap.fromTo(successMessage, {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(successMessage, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    delay: 4,
                    ease: "power2.in",
                    onComplete: () => successMessage.remove()
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
                addMenuToggleListeners(); // Call *after* header is loaded
                updateActiveNavLink();  // Call *after* header is loaded
                // Initialize slider and GSAP animations *after* header is loaded
                initSlider();
                initGSAPAnimations();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                const errorDiv = document.createElement('div');
                errorDiv.classList.add('header-error');
                errorDiv.textContent = 'Error loading header. Please refresh the page.';
                document.getElementById('header-placeholder').appendChild(errorDiv);
            });
    }

    // --- Mobile Menu Toggle ---
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');

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
        document.querySelectorAll('.has-submenu > a').forEach(link => {
            link.addEventListener('click', function(event) {
                if (window.innerWidth <= 767) {
                    event.preventDefault();
                    const submenu = this.nextElementSibling;
                    const parentLi = this.parentElement;

                    if (submenu) {
                        if (submenu.classList.contains('show-sub-menu')) {
                            gsap.to(submenu, {
                                height: 0,
                                opacity: 0,
                                duration: 0.3,
                                ease: "power2.in",
                                onComplete: () => {
                                    submenu.classList.remove('show-sub-menu');
                                    parentLi.classList.remove('active');
                                    submenu.style.height = '';
                                    submenu.style.opacity = '';
                                }
                            });
                        } else {
                            submenu.classList.add('show-sub-menu');
                            parentLi.classList.add('active');
                            gsap.fromTo(submenu, {
                                height: 0,
                                opacity: 0,
                            }, {
                                height: "auto",
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
            const wasActive = link.classList.contains('active');
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (path === '/' || path.endsWith('index.html')) {
                if (href === '/') {
                    link.classList.add('active');
                }
            } else if (path.endsWith(href)) {
                link.classList.add('active');
            }

            if (wasActive !== link.classList.contains('active')) {
                if (link.classList.contains('active')) {
                    gsap.fromTo(link, { color: link.style.color || 'initial' }, {
                        color: "var(--accent-color)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(link, {
                        color: "var(--text-color)",
                        duration: 0.3,
                        ease: "power2.in"
                    });
                }
            }
        });
    }

    // --- Slider ---
    function initSlider() {
        const sliderContainer = document.querySelector('.slider-container');
        const prevButton = document.querySelector('.slider-btn.prev');
        const nextButton = document.querySelector('.slider-btn.next');

        if (!sliderContainer || !prevButton || !nextButton) {
            console.warn("Slider elements not found. Skipping slider initialization.");
            return;
        }

        const imageUrls = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg',
            'images/slider-image4.jpg'
        ];

        let currentSlide = 0;

        const slider = document.querySelector('.slider');
        imageUrls.forEach(url => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = url;
            img.alt = "Slider Image";
            slide.appendChild(img);
            slider.appendChild(slide);
        });

        const slides = document.querySelectorAll('.slider .slide');

        function showSlide(index) {
            if (slides.length === 0) return;

            if (index < 0) {
                currentSlide = slides.length - 1;
            } else if (index >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }

            const translateValue = -currentSlide * 100 + '%';
            gsap.to(slider, {
                x: translateValue,
                duration: 0.8,
                ease: "power3.out"
            });
        }

        prevButton.addEventListener('click', () => {
            gsap.fromTo(prevButton, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
            showSlide(currentSlide - 1);
        });

        nextButton.addEventListener('click', () => {
            gsap.fromTo(nextButton, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
            showSlide(currentSlide + 1);
        });

        showSlide(currentSlide);

        let autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // --- "Load More Details" ---
    function loadMoreDetails() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        const moreDetailsDiv = document.getElementById('more-details');

        if (!loadMoreBtn || !moreDetailsDiv) return;

        loadMoreBtn.addEventListener('click', function() {
            gsap.to(loadMoreBtn, {
                scale: 0.9,
                duration: 0.2,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            });

            fetch('data/more-details.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    gsap.killTweensOf(loadMoreBtn);
                    loadMoreBtn.style.transform = '';
                    loadMoreBtn.style.display = 'none';

                    const detailsFragment = document.createDocumentFragment();

                    data.details.forEach((detailHtml, index) => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = detailHtml;
                        detailsFragment.appendChild(tempDiv);

                        gsap.fromTo(tempDiv, {opacity: 0, y: 20}, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            delay: 0.1 * index,
                        });
                    });

                    moreDetailsDiv.appendChild(detailsFragment);
                    moreDetailsDiv.style.display = 'block';
                })
                .catch(error => {
                    console.error('Error loading more details:', error);
                    gsap.killTweensOf(loadMoreBtn);
                    loadMoreBtn.style.transform = '';
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
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

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

                submitButton.disabled = true;
                gsap.to(submitButton, {
                    scale: 0.9,
                    duration: 0.2,
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut"
                });

                const formData = new FormData(contactForm);

                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(response => {
                    gsap.killTweensOf(submitButton);
                    submitButton.disabled = false;
                    submitButton.style.transform = '';

                    if (response.ok) {
                        displaySuccessMessage(contactForm);
                        contactForm.reset();
                    } else {
                        displayError(messageInput, "An error occurred. Please try again");
                    }
                })
                .catch(error => {
                    gsap.killTweensOf(submitButton);
                    submitButton.disabled = false;
                    submitButton.style.transform = '';
                    displayError(messageInput, "An error occurred. Please try again");
                });
            }
        });
    }

    loadHeader();
    loadMoreDetails();
    setupFormValidation();
});