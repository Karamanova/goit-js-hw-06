const inputFontSizeEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');
textEl.style.fontSize = `${inputFontSizeEl.value}px`;

inputFontSizeEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}