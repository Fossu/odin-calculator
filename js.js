
const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.numberButtons');
const operators = document.querySelector('.operatorButtons');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

for (i = 1; i < 10; i++) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(i);
  buttons.appendChild(button);
  button.textContent = i;
}

const operatorsArray = ['+', '-', "*", "/"];
const operatorsID = ['plus', 'minus', 'times', 'divide'];
for (i = 0; i < 4; i++) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(operatorsArray[i]);
  button.setAttribute('id', operatorsID[i]);
  operators.appendChild(button);
  button.textContent = operatorsArray[i];
}

const extrasArray = ['0', '.', '='];
const extrasID = ['zero', 'dot', 'equals'];
for (i = 0; i < 3; i++) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(extrasArray[i]);
  button.setAttribute('id', extrasID[i]);
  buttons.appendChild(button);
  button.textContent = extrasArray[i];
}

const allButtons = document.querySelectorAll('.button');
allButtons.forEach(button => button.addEventListener('click', updateInput));

function updateInput(e) {
  const currentInput = input.textContent;
  input.textContent = currentInput + e.target.classList[1];
}

const equals = document.querySelector('#equals');
const dot = document.querySelector('#dot');

equals.addEventListener('click', updateOutput);

function updateOutput(e) {
  output.textContent = operate(input.textContent);
  allButtons.forEach(button => button.disabled = true);
}

function operate(equation) {
  let value = equation.split('');
  // for (let i = 0; i < value.length; i++) {
  //   if 
  // }
  console.log(value);
  return value;
}

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', clearInputOutput);
function clearInputOutput(e) {
  input.innerHTML = '&nbsp';
  output.innerHTML = '&nbsp';
  allButtons.forEach(button => button.disabled = false);
}







