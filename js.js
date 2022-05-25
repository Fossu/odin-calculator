
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
  let numbers = [];
  let operators = [];
  let sliceStart = 0;
  if (operatorsArray.includes(value[1]) == true ||
    operatorsArray.includes(value[value.length - 2]) == true) {
    return 'Error, string cannon begin or end on an operator';
  }
  for (let i = 0; i < value.length; i++) {
    if (operatorsArray.includes(value[i])) {
      if (i == sliceStart) {
        return "Error, double operator";
      }
      numbers.push(value.slice(sliceStart, i).join(''));
      operators.push(value[i]);
      sliceStart = i + 1;
    }
  }
  numbers.push(value.slice(sliceStart, value.length - 1).join(''));
  // console.log(numbers);
  // console.log(operators);
  while (operators.includes('*') == true || operators.includes('/') == true) {
    const index = Math.min(
      (operators.indexOf('*') != -1 ? operators.indexOf('*') : 99999999),
      (operators.indexOf('/') != -1 ? operators.indexOf('/') : 99999999));
    numbers[index + 1] = atomOperate(numbers[index], numbers[index + 1], operators[index]);
    numbers[index] = 'toRemove';
    operators[index] = 'toRemove';
  }
  removeItem(numbers, 'toRemove');
  removeItem(operators, 'toRemove');
  while (operators.includes('+') == true || operators.includes('-') == true) {
    const index = Math.min(
      (operators.indexOf('+') != -1 ? operators.indexOf('+') : 99999999),
      (operators.indexOf('-') != -1 ? operators.indexOf('-') : 99999999));
    // console.log(atomOperate(numbers[index], numbers[index + 1], operators[index]));
    numbers[index + 1] = atomOperate(numbers[index], numbers[index + 1], operators[index]);
    numbers[index] = 'toRemove';
    operators[index] = 'toRemove';
  }
  removeItem(numbers, 'toRemove');
  removeItem(operators, 'toRemove');
  // console.log(numbers);
  // console.log(operators);
  // console.log(value);
  return numbers;
}

function removeItem(array, item) {
  var i = array.length;
  while (i--) {
    if (array[i] === item) {
      array.splice(array.indexOf(item), 1);
    }
  }
}

function atomOperate(x, y, operator) {
  if (operator == '+') {
    return x + y;
  }
  if (operator == '-') {
    return x - y;
  }
  if (operator == '*') {
    return x * y;
  }
  if (operator == '/') {
    return x / y;
  }
}

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', clearInputOutput);

function clearInputOutput(e) {
  input.innerHTML = '&nbsp';
  output.innerHTML = '&nbsp';
  allButtons.forEach(button => button.disabled = false);
}













