class FormValidation {
    constructor(formElement) {
        this.formElement = formElement;
        this.inputs = formElement.querySelectorAll('.form-input, .form-textarea');
        this.submitButton = formElement.querySelector('button[type="submit"]');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.clearErrors();
            const hasErrors = this.validateInputs();

            if (!hasErrors) {
                this.submitForm();
            }
        });
    }

    clearErrors() {
        this.inputs.forEach(input => {
            this.clearError(input);
        });
    }

    validateInputs() {
        let hasErrors = false;
        const nameInput = this.formElement.querySelector('#name');
        const emailInput = this.formElement.querySelector('#email');
        const messageInput = this.formElement.querySelector('#message');

        if (nameInput.value.trim() === '') {
            this.displayError(nameInput, 'Name is required.');
            hasErrors = true;
        }

        if (emailInput.value.trim() === '') {
            this.displayError(emailInput, 'Email is required.');
            hasErrors = true;
        } else if (!this.isValidEmail(emailInput.value.trim())) {
            this.displayError(emailInput, 'Please enter a valid email address.');
            hasErrors = true;
        }

        if (messageInput.value.trim() === '') {
            this.displayError(messageInput, 'Message is required.');
            hasErrors = true;
        }

        return hasErrors;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    displayError(inputElement, message) {
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        errorSpan.textContent = message;
        inputElement.classList.add('input-error');
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);
        inputElement.focus();
    }

    clearError(inputElement) {
        inputElement.classList.remove('input-error');
        const errorSpan = inputElement.parentNode.querySelector('.error-message');
        if (errorSpan) {
            errorSpan.remove();
        }
    }

    submitForm() {
        this.submitButton.disabled = true;

        const formData = new FormData(this.formElement);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => {
            this.submitButton.disabled = false;
            if (response.ok) {
                this.displaySuccessMessage();
                this.formElement.reset();
            } else {
                this.displayError(this.formElement.querySelector('#message'), "An error occurred. Please try again");
            }
        })
        .catch(() => {
            this.submitButton.disabled = false;
            this.displayError(this.formElement.querySelector('#message'), "An error occurred. Please try again");
        });
    }

    displaySuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = "Thank you! Your message has been sent successfully.";
        this.formElement.parentNode.insertBefore(successMessage, this.formElement.nextSibling);
        setTimeout(() => {
            successMessage.remove();
        }, 4000);
    }
}

export default FormValidation;