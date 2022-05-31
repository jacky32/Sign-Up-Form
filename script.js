const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password_confirmation');

password.addEventListener('input', (event) => {
  if(event.target.value == passwordConfirmation.value) {
    password.classList.remove('error');
    passwordConfirmation.classList.remove('error');
  } else {
    password.classList.add('error');
    passwordConfirmation.classList.add('error');
  }
});
passwordConfirmation.addEventListener('input', (event) => {
  if(password.value == event.target.value) {
    password.classList.remove('error');
    passwordConfirmation.classList.remove('error');
  } else {
    password.classList.add('error');
    passwordConfirmation.classList.add('error');
  }
});



function validatePasswords() {
  if(password.value != passwordConfirmation.value) {
    if(!password.classList.contains('error')) {
      password.classList.add('error');
      passwordConfirmation.classList.add('error');
      password.addEventListener('change', (event) => {
        if(event.target.value == passwordConfirmation.value) {
          password.classList.remove('error');
          passwordConfirmation.classList.remove('error');
          return true;
        }
      });
      passwordConfirmation.addEventListener('change', (event) => {
        if(passwordConfirmation.value == event.target.value) {
          password.classList.remove('error');
          passwordConfirmation.classList.remove('error');
          return true;
        }
      });
      return false;
    }
  } else {
    if(password.classList.contains('error')) {
      password.classList.remove('error');
      passwordConfirmation.classList.remove('error');
      return true;
    }
  }
};