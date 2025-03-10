document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contact-form');

if (contactForm) { // Check if the form exists
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission for now

        // Basic validation (example)
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email address.');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter a message.');
            messageInput.focus();
            return;
        }

        // If validation passes, you would normally submit the form here
        // using AJAX or let the browser handle the submission.
        alert('Form submitted successfully! (Not really, this is just a demo)');
    });
}

function isValidEmail(email) {
    // Basic email validation regex (not perfect, but a good start)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function nextSlide() {
    showSlides();

}

function prevSlide() {
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex--;
    if (slideIndex < 1) { slideIndex = slides.length }
    slides[slideIndex - 1].classList.add("active");

}

const loadMoreBtn = document.getElementById('load-more-btn');
const moreDetailsDiv = document.getElementById('more-details');

if (loadMoreBtn && moreDetailsDiv) { // Check if elements exist
    loadMoreBtn.addEventListener('click', function() {
        // Simulate fetching data from a server (replace with actual fetch call)
        const newContent = `
            <p><strong>Expanded History:</strong> In our early years, we focused primarily on local partnerships.  We quickly realized the growing demand for international collaboration and expanded our services to meet those needs.</p>
            <p>We've faced many challenges along the way, but our commitment to our core values has always guided us.  We're constantly learning and adapting to the ever-changing global landscape.</p>
        `;

        moreDetailsDiv.innerHTML = newContent; // Add the new content
        loadMoreBtn.style.display = 'none'; // Hide the button after loading
    });
}

// Example using fetch (replace with your API endpoint)
fetch('your-api-endpoint/more-details')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        moreDetailsDiv.innerHTML = data.content; // Assuming the API returns an object with a "content" property
        loadMoreBtn.style.display = 'none';
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        moreDetailsDiv.innerHTML = '<p>Error loading details.</p>'; // Display an error message
    });