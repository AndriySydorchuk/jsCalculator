const operators = ['+', '-', '*', '/', '='];

function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;

        default:
            break;
    }
}

const displayEl = document.querySelector('.display');

const digitBtns = document.querySelectorAll('.digits>button');
const operatorBtns = document.querySelectorAll('.operators>button');


digitBtns.forEach((digitBtn) => digitBtn.addEventListener('click', () => {
    displayEl.textContent += digitBtn.textContent;
}));

operatorBtns.forEach((operatorBtn) => operatorBtn.addEventListener('click', () => {
    if (operatorBtn.textContent !== '=') {
        displayEl.textContent += operatorBtn.textContent;
    } else {
        displayEl.textContent = calcInput();
    }
}));

function calcInput() {
    const userInput = displayEl.textContent.split('');

    const opersInInput = userInput.filter((char) => operators.includes(char));

    const isNegativeCalc = opersInInput.length > 1 && opersInInput[0] === '-';
    const operIndex = isNegativeCalc ? userInput.lastIndexOf(opersInInput[1]) : userInput.indexOf(opersInInput[0]);

    const nums = getNums(userInput, operIndex);

    return operate(nums.first, nums.second, userInput[operIndex]);
}

function getNums(inputArr, operIndex) {
    let nums = {};
    nums.first = Number(inputArr.filter((char, index) => {
        if (index < operIndex) return char;
    }).join(''));
    nums.second = Number(inputArr.filter((char, index) => {
        if (index > operIndex) return char;
    }).join(''));

    return nums;
}

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
    displayEl.textContent = '';
});

const dotBtn = document.querySelector('.dot-btn');

dotBtn.addEventListener('click', () => {

    const displayedText = displayEl.textContent;

    if (displayedText.includes('.')) {
        const includesOperator = operators.reduce((include, operator) => {
            if (displayedText.includes(operator)) {
                include = true;
            }

            if (include === true) return true;

            return false;

        }, false);

        if (includesOperator) {
            const dotsCount = displayedText.split('').filter((char) => char === '.').length;
            if (dotsCount === 2) return;

            const userInput = displayedText.split('');

            const oper = userInput.filter((char) => operators.includes(char))[0];
            const operIndex = userInput.indexOf(oper);

            if (displayedText.length === operIndex + 1) {
                displayEl.textContent += '0.';
            } else {
                displayEl.textContent += '.';
            }
        }

    } else {
        if (displayedText === '') {
            displayEl.textContent = '0.';
        } else {
            displayEl.textContent += '.';
        }
    }
});