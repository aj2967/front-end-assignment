"use-strict";

//Contact Form
const submitButton = document.getElementById('submit');

function show() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const summary = document.getElementById('contact-summary');
  const formError = document.getElementById('form-error');

  if (email === '') {
    formError.style.display = 'inline-block';
    summary.style.display = 'none';

  } else {
    formError.style.display = 'none';
    summary.style.display = 'inline-block';
    document.getElementById('contact-form-heading').innerHTML = 'Contact Form';

    document.getElementById('contact-form-heading').innerHTML = 'Form Sent';
    document.querySelector('.display-firstname').innerHTML = `<b>Firstname:</b> ${firstname}`;
    document.querySelector('.display-lastname').innerHTML = `<b>Lastname:</b> ${lastname}`;
    document.querySelector('.display-email').innerHTML = `<b>Email:</b> ${email}`;
    document.querySelector('.display-message').innerHTML = `<b>Message:</b> ${message}`;;
  }
}

submitButton.addEventListener('click', show);
