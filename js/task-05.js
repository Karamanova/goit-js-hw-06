const formEl = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
formEl.input.addEventListener('input', onInputTyping);
function onInputTyping(event) {
  formEl.output.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === '') {
    formEl.output.textContent = 'Anonymous';
  }
}