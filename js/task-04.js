let counterValue = 0;
const counterRef = document.querySelector('#counter');
const addClickBtn = counterRef.firstElementChild;
const removeClickBtn = counterRef.lastElementChild;
const onTargetCounter = document.querySelector('#value');

addClickBtn.addEventListener('click', decrementEl);
removeClickBtn.addEventListener('click', incrementEl);

function decrementEl() {
  counterValue -= 1;
  onTargetCounter.textContent = counterValue;
}

function incrementEl() {
  counterValue += 1;
  onTargetCounter.textContent = counterValue;
}