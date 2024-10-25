const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('exampleInputEmail1');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
///

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

///

function showError(input, message, errorElement) {
    input.classList.add('is-invalid');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

///

function clearError(input, errorElement) {
    input.classList.remove('is-invalid');
    errorElement.textContent = '';
}

/////

function validateInput(input, errorElement, regex = null) {
    if (input.value.trim() === '') {
        showError(input, 'Este campo es requerido', errorElement);
    } else if (regex && !regex.test(input.value.trim())) {
        showError(input, 'Formato incorrecto', errorElement);
    } else {
        clearError(input, errorElement);
    }
}

/////

nameInput.addEventListener('input', () => validateInput(nameInput, nameError));
emailInput.addEventListener('input', () => validateInput(emailInput, emailError, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
phoneInput.addEventListener('input', () => validateInput(phoneInput, phoneError, /^\d{9}$/)); // Número de teléfono
subjectInput.addEventListener('input', () => validateInput(subjectInput, subjectError));
messageInput.addEventListener('input', () => validateInput(messageInput, messageError));


/////
form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let isValid = true;

    ///////////
    validateInput(nameInput, nameError);
    validateInput(emailInput, emailError, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    validateInput(phoneInput, phoneError, /^\d{9}$/);
    validateInput(subjectInput, subjectError);
    validateInput(messageInput, messageError);

    ///////

    if (document.querySelectorAll('.is-invalid').length === 0) {
        form.submit();
    }
});