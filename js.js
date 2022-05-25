
const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.numberButtons');
const operators = document.querySelector('.operatorButtons');

for (i = 1; i < 10; i++) {
  const button = document.createElement('button');
  button.classList.add('numberButton');
  button.classList.add("'" + i + "'");
  buttons.appendChild(button);
  button.textContent = i;
}


const operatorsArray = ['+', '-', "*", "/"];
for (i = 0; i < 4; i++) {
  const button = document.createElement('button');
  button.classList.add('operatorButton');
  button.classList.add(operatorsArray[i]);
  operators.appendChild(button);
  button.textContent = operatorsArray[i];
}

const extrasArray = ['0', '.', '='];
for (i = 0; i < 3; i++) {
  const button = document.createElement('button');
  button.classList.add('numberButton');
  button.classList.add(extrasArray[i]);
  buttons.appendChild(button);
  button.textContent = extrasArray[i];
}

console.log('works');