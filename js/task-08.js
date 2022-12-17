const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заполнить все поля');
  }

  const objectValue = { Email: email.value, Password: password.value };
  console.log(objectValue);
  event.currentTarget.reset();
});
