// ADDITION CALCULATOR
// import functions
import { add, subtract, multiply, divide } from './calculations.js';

// reference needed DOM elements
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

// set event listeners 
addButton.addEventListener('click', () => {
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x, y);

// update DOM to reflect new value(s)
    addResult.textContent = sum;
});
// do any needed work with the value(s)
// get user input(s)

// SUBTRACTION CALCULATOR
const subtractXInput = document.getElementById('subtract-x-input');
const subtractYInput = document.getElementById('subtract-y-input');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

subtractButton.addEventListener('click', () => {
    const x = Number(subtractXInput.value);
    const y = Number(subtractYInput.value);
    const result = subtract(x, y);

    subtractResult.textContent = result;
});

// DIVISION CALCULATOR
const divideXInput = document.getElementById('divide-x-input');
const divideYInput = document.getElementById('divide-y-input');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
    const x = Number(divideXInput.value);
    const y = Number(divideYInput.value);
    const result = divide(x, y);

    divideResult.textContent = result;
});

// MULTIPLICATION CALCULATOR
const multiplyXInput = document.getElementById('multiply-x-input');
const multiplyYInput = document.getElementById('multiply-y-input');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

multiplyButton.addEventListener('click', () => {
    const x = Number(multiplyXInput.value);
    const y = Number(multiplyYInput.value);
    const result = multiply(x, y);

    multiplyResult.textContent = result;
});