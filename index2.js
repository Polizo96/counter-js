const DEFAULT = 0;
let counter = DEFAULT;

const btnDecreaseDOM = document.querySelector('#btnDecr');
const btnResetDOM = document.querySelector('#btnReset');
const btnIncreaseDOM = document.querySelector('#btnIncr');
const counterDOM = document.querySelector('#counter');

/**
 * Listener
 */
btnDecreaseDOM.addEventListener('click', function() {
  onClickmeDecr();
})

btnIncreaseDOM.addEventListener('click', function() {
  onClickmeIncr();
})

btnResetDOM.addEventListener('click', function() {
  onClickmeReset();
})

/**
 * Controller
 * Actions taken after each button clicked.
 */
function onClickmeDecr() {
  counterDecr();
}

function onClickmeIncr() {
  counterIncr();
}

function onClickmeReset() {
  counterReset();
}

/**
 * Model
 * Updates the counter 
 */
function counterDecr() {
  counter--;
  counterDOM.innerHTML = counter;
}

function counterIncr() {
  counter++;
  counterDOM.innerHTML = counter;
}

function counterReset() {
  counter = DEFAULT;
  counterDOM.innerHTML = counter;
}
