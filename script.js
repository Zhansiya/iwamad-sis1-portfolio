const themeButton = document.querySelector('#theme-toggle');
const html = document.documentElement;

themeButton.addEventListener('click', () => {
    const currentTheme = html.dataset.theme;

    if (currentTheme === 'dark') {
        html.dataset.theme = 'light';
        themeButton.textContent = '☾';
    } else {
        html.dataset.theme = 'dark';
        themeButton.textContent = '☀';
    }
});

const contactForm = document.querySelector('#contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const formSuccess = document.querySelector('#form-success');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.textContent = '';

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter a message.';
        isValid = false;
    }

    if (isValid) {
        formSuccess.textContent =
            'Thank you! Your message has been sent successfully.';

        contactForm.reset();
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}