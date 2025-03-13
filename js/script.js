document.addEventListener("DOMContentLoaded", function () {
    // 🚀 Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Offset for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // 🚀 Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.querySelector("input[name='name']").value.trim();
            let email = document.querySelector("input[name='email']").value.trim();
            let message = document.querySelector("textarea[name='message']").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("⚠ Please fill out all fields before submitting.");
            } else {
                alert("✅ Your message has been sent successfully!");
                this.reset();
            }
        });
    }

    // 🚀 Button Animation (Works on All CTA Buttons)
    document.querySelectorAll(".cta-button").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // 🚀 Service Cards - Expandable Details with Smooth Animation
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", function () {
            let detail = this.querySelector(".more-info");

            if (detail.style.maxHeight) {
                detail.style.maxHeight = null; // Collapse
                this.classList.remove("active");
            } else {
                detail.style.maxHeight = detail.scrollHeight + "px"; // Expand
                this.classList.add("active");
            }
        });
    });
});
