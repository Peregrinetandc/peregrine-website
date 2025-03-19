export function displayError(inputElement, message) {
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.textContent = message;
    inputElement.classList.add('input-error');
    inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);

    const tl = gsap.timeline();
    tl.to(inputElement, {
        x: 10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
    })
    .to(inputElement, {
        backgroundColor: "#f8d7da",
        duration: 0.2,
    }, "-=0.2")
    .from(errorSpan, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
    }, "-=0.1");

    inputElement.focus();
}

export function clearError(inputElement) {
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

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function displaySuccessMessage(formElement) {
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