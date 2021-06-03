// import functions
import { add } from './calculations.js';


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