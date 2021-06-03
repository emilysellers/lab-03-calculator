// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { add } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { subtract } from '../calculations.js';

test('subtracts one number from another', (expect) => {
    const expected = 3;
    const actual = subtract(9, 6);
    expect.equal(actual, expected);
});

import { divide } from '../calculations.js';

test('divides one number by another', (expect) => {
    const expected = 20;
    const actual = divide(100, 5);
    expect.equal(actual, expected);
});