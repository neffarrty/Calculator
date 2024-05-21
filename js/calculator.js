const previous = document.getElementById('previous');
const current = document.getElementById('current');
let expression = ['0'];

let memory = 0;
let result = null;

function factorial(num) {
    if (num === 0) { 
        return 1;
    }
    else { 
        return num * factorial(num - 1); 
    }
}

function calculate(expression) {
    let copy = expression.map((n) => {
        let a = parseFloat(n);
        return Number.isNaN(a) ? n : a;
    });

    if (Number.isNaN(parseFloat(copy[copy.length - 1]))) {
        copy.splice(copy.length - 1, 1);
    }

    while (copy.includes('*')) {
        let i = copy.indexOf('*');

        if (copy.includes('/') && copy.indexOf('/') < copy.indexOf('*')) {
            i = copy.indexOf('/');
            copy.splice(i - 1, 3, copy[i - 1] / copy[i + 1]);
            continue;
        }
        copy.splice(i - 1, 3, copy[i - 1] * copy[i + 1]);
    }

    while (copy.includes('/')) {
        let i = copy.indexOf('/');

        if (copy.includes('*') && copy.indexOf('*') < copy.indexOf('/')) {
            i = copy.indexOf('*');
            copy.splice(i - 1, 3, copy[i - 1] * copy[i + 1]);
            continue;
        }
        copy.splice(i - 1, 3, copy[i - 1] / copy[i + 1]);
    }

    while (copy.includes('+')) {
        let i = copy.indexOf('+');

        if (copy.includes('-') && copy.indexOf('-') < copy.indexOf('+')) {
            i = copy.indexOf('-');
            copy.splice(i - 1, 3, copy[i - 1] - copy[i + 1]);
            continue;
        }
        copy.splice(i - 1, 3, copy[i - 1] + copy[i + 1]);
    }

    while (copy.includes('-')) {
        let i = copy.indexOf('-');

        if (copy.includes('+') && copy.indexOf('+') < copy.indexOf('-')) {
            i = copy.indexOf('+');
            copy.splice(i - 1, 3, copy[i - 1] + copy[i + 1]);
            continue;
        }
        copy.splice(i - 1, 3, copy[i - 1] - copy[i + 1]);
    }

    return copy[0];
}


document.querySelectorAll('[data-digit]').forEach((button) => {
    button.addEventListener('click', () => {
        if (expression.length === 1 && result !== null) {
            result = null;
            expression[expression.length - 1] = button.innerText;
            current.textContent = expression.join(' ');
        }
        else if (expression[expression.length - 1] === '0') {
            expression[expression.length - 1] = button.innerText;
            current.textContent = expression.join(' ');
        }
        else {
            current.textContent = current.textContent + button.innerText;
            expression = current.textContent.trim().split(' ');
        }
    });
});

document.querySelectorAll('[data-operation]').forEach((button) => {
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

document.querySelector('[data-percent').addEventListener('click', () => {
    if (expression.length > 2) {
        let last = parseFloat(expression[expression.length - 1]);
    
        if (!Number.isNaN(last)) {
            expression[expression.length - 1] = (expression[expression.length - 3] / 100 * last).toFixed(2);
            current.textContent = expression.join(' ');
        }
    }
});

document.querySelector('[data-factorial').addEventListener('click', () => {
    let last = parseInt(expression[expression.length - 1]);

    if (!Number.isNaN(last)) {
        expression[expression.length - 1] = factorial(last);
        current.textContent = expression.join(' ');
    }
});

document.querySelector('[data-sqrt').addEventListener('click', () => {
    let last = parseFloat(expression[expression.length - 1]);
    
    if (!Number.isNaN(last)) {
        expression[expression.length - 1] = Math.sqrt(last).toFixed(2);
        current.textContent = expression.join(' ');
    }
});

document.querySelector('[data-sqr').addEventListener('click', () => {
    let last = parseFloat(expression[expression.length - 1]);
    
    if (!Number.isNaN(last)) {
        expression[expression.length - 1] = (last * last).toFixed(2);
        current.textContent = expression.join(' ');
    }
});

document.querySelector('[data-cbr').addEventListener('click', () => {
    let last = parseFloat(expression[expression.length - 1]);
    
    if (!Number.isNaN(last)) {
        expression[expression.length - 1] = (last * last * last).toFixed(2);
        current.textContent = expression.join(' ');
    }
});

document.querySelector('[data-equals]').addEventListener('click', () => {
    result = calculate(expression);
    previous.textContent = current.textContent;
    current.textContent = result;
    expression = [`${result}`];
});

document.querySelector('[data-clear]').addEventListener('click', () => {
    previous.textContent = '';
    current.textContent = '0';
    expression = ['0'];
    result = null;
});

document.querySelector('[data-delete]').addEventListener('click', () => {
    if (expression.length === 1) {
        expression = ['0'];
    }
    else {
        expression.splice(expression.length - 1, 1);
    }
    current.textContent = expression.join(' ');
});

document.querySelector('[data-negate]').addEventListener('click', () => {
    let number = parseFloat(expression[expression.length - 1]);
    if (!Number.isNaN(number)) {
        expression[expression.length - 1] = String(-number);
    }
    current.textContent = expression.join(' ');
});
