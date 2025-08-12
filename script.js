const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

const num1 = Number(prompt('Enter the first number: '));
const num2 = Number(prompt('Enter the second number: '));
const operator = prompt('Enter an operation that have to be done with your numbers: ');
    
alert(operate(num1, num2, operator));

function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }

function operate(num1, num2, operator) {
    switch (operator) {
        case PLUS:
            return add(num1, num2);
            break;
        case MINUS:
            return subtract(num1, num2);
            break;
        case MULTIPLY:
            return multiply(num1, num2);
            break;
        case DIVIDE:
            return divide(num1, num2);
            break;
    
        default:
            break;
    }
}