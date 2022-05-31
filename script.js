const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password_confirmation');

password.addEventListener('input', (event) => {
  if(event.target.value == passwordConfirmation.value) {
    removeErrorClass();
  } else {
    addErrorClass();
  }
});
passwordConfirmation.addEventListener('input', (event) => {
  if(password.value == event.target.value) {
    removeErrorClass();
  } else {
    addErrorClass();
  }
});

function validate() {
  return document.getElementById('signup_form').reportValidity();
}

function removeErrorClass() {
  password.classList.remove('error');
  passwordConfirmation.classList.remove('error');
  password.setCustomValidity("");
  passwordConfirmation.setCustomValidity("");
}

function addErrorClass() {
  password.classList.add('error');
  passwordConfirmation.classList.add('error');
  password.setCustomValidity("Passwords don't match.");
  passwordConfirmation.setCustomValidity("Passwords don't match.");
}