import FormValidation from '../src/components/formValidation';

describe('FormValidation', () => {
    let formValidation;
    let mockForm;

    beforeEach(() => {
        document.body.innerHTML = `
            <form class="contact-form">
                <input type="text" id="name" class="form-input" />
                <input type="email" id="email" class="form-input" />
                <textarea id="message" class="form-textarea"></textarea>
                <button type="submit">Submit</button>
            </form>
        `;
        mockForm = document.querySelector('.contact-form');
        formValidation = new FormValidation(mockForm);
    });

    test('should display error when name is empty', () => {
        mockForm.querySelector('#name').value = '';
        formValidation.validate();
        const errorMessage = mockForm.querySelector('.error-message');
        expect(errorMessage).toBeTruthy();
        expect(errorMessage.textContent).toBe('Name is required.');
    });

    test('should display error when email is empty', () => {
        mockForm.querySelector('#email').value = '';
        formValidation.validate();
        const errorMessage = mockForm.querySelector('.error-message');
        expect(errorMessage).toBeTruthy();
        expect(errorMessage.textContent).toBe('Email is required.');
    });

    test('should display error for invalid email format', () => {
        mockForm.querySelector('#email').value = 'invalid-email';
        formValidation.validate();
        const errorMessage = mockForm.querySelector('.error-message');
        expect(errorMessage).toBeTruthy();
        expect(errorMessage.textContent).toBe('Please enter a valid email address.');
    });

    test('should display error when message is empty', () => {
        mockForm.querySelector('#message').value = '';
        formValidation.validate();
        const errorMessage = mockForm.querySelector('.error-message');
        expect(errorMessage).toBeTruthy();
        expect(errorMessage.textContent).toBe('Message is required.');
    });

    test('should not display errors when all fields are valid', () => {
        mockForm.querySelector('#name').value = 'John Doe';
        mockForm.querySelector('#email').value = 'john@example.com';
        mockForm.querySelector('#message').value = 'Hello!';
        formValidation.validate();
        const errorMessages = mockForm.querySelectorAll('.error-message');
        expect(errorMessages.length).toBe(0);
    });
});