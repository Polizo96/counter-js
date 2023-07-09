const DEFAULT = 0;
let counter = DEFAULT;

const btnDecreaseDOM = document.querySelector('#btnDecr');
const btnResetDOM = document.querySelector('#btnReset');
const btnIncreaseDOM = document.querySelector('#btnIncr');
const counterDOM = document.querySelector('#counter');

btnDecreaseDOM.addEventListener('click', function() {
  counter--
  counterDOM.innerHTML = counter;
})

btnResetDOM.addEventListener('click', function() {
  counter = DEFAULT
  counterDOM.innerHTML = counter;
})

btnIncreaseDOM.addEventListener('click', function() {
  counter++
  counterDOM.innerHTML = counter;
})