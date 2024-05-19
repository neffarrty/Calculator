const previous = document.getElementById('previous');
const current = document.getElementById('current');
const digitButtons = document.querySelectorAll('[data-digit]');
const operationButtons = document.querySelectorAll('[data-operation]');
const negateButton = document.querySelector('[data-negate]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
let expression = ['0'];
let memory = 0;
let result;

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (expression.length === 1 && result !== undefined) {
            expression[expression.length - 1] = button.innerText;
            current.textContent = expression.join(' ');
        }
        else if (expression[expression.length - 1] === '0') {
            console.log('0');
            expression[expression.length - 1] = button.innerText;
            current.textContent = expression.join(' ');
        }
        else {
            current.textContent = current.textContent + button.innerText;
            expression = current.textContent.trim().split(' ');
        }
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (expression[expression.length - 1].match(/^[^0-9]$/)) {
            expression[expression.length - 1] = button.innerText;
            current.textContent = expression.join(' ') + ' ';
        }
        else {
            current.textContent = current.textContent + ` ${button.innerText} `;
            expression = current.textContent.trim().split(' ');
        }
    });
});

equalsButton.addEventListener('click', (button) => {
    const func = new Function(`return ` + expression.join(' '));
    result = func();
    previous.textContent = current.textContent;
    current.textContent = result;
    expression = [`${result}`];
});

clearButton.addEventListener('click', () => {
    previous.textContent = '';
    current.textContent = '0';
    expression = ['0'];
    result = undefined;
});

deleteButton.addEventListener('click', () => {
    if (expression.length === 1) {
        expression = ['0'];
    }
    else {
        expression.splice(expression.length - 1, 1);
    }
    current.textContent = expression.join(' ');
});

negateButton.addEventListener('click', (button) => {
    let number = parseFloat(expression[expression.length - 1]);
    if (!Number.isNaN(number)) {
        expression[expression.length - 1] = String(-number);
    }
    current.textContent = expression.join(' ');
});