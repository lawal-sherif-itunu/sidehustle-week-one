const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const gender = document.getElementById('gender-input');
const password = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const numberError = document.getElementById('number-error');
const passwrodError = document.getElementById('password-error');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const backToForm = document.querySelector('.back');
const popupContent = document.querySelector('.popup');
const submit = document.querySelector('.input-supmit');

form.addEventListener('submit', e => {
    let nameMessages = []
    if (name.value === '' || name.value == null) {
        nameMessages.push('Name is required')
    }

    if (nameMessages.length > 0) {
    nameError.innerText = nameMessages.join(', ')
    } else {
        nameError.style.display = 'none';
    }
    e.preventDefault();

    // // // ERROR MESSAGE FOR EMAIL

    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Email is required')
    }

    if (emailMessages.length > 0) {
        emailError.innerText = emailMessages.join(', ')
    } else {
        emailError.style.display = 'none';
    }
    e.preventDefault();

    // // // ERROR MESSAGE FOR NUMBER
    let numberMessages = []
    if (number.value === '' || number.value == null) {
        numberMessages.push('Number is required')
    }

    if (numberMessages.length > 0) {
        numberError.innerText = numberMessages.join(', ')
    } else {
        numberError.style.display = 'none';
    }
    e.preventDefault();

    // // // ERROR MESSAGE FOR PASSWORD
    let passwordMessages = []
    if (password.value === '' || password.value == null) {
        passwordMessages.push('Password is required')
    }

    if (passwordMessages.length > 0) {
        passwrodError.innerText = passwordMessages.join(', ')
    } else {
        passwrodError.style.display = 'none';
    }
    e.preventDefault();

    e.target.preventDefault();

});

form.addEventListener('submit', e => {
    if (name.value !== '' && name.value != null && email.value !== '' && email.value != null && number.value !== '' && number.value != null && password.value !== '' && password.value != null) {

        popup.style.display = 'block';

        close.addEventListener('click', e => {
            popup.style.display = 'none';
        })


        backToForm.addEventListener('click', e => {
            popup.style.display = 'none';
        });

    }
});