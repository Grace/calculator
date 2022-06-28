function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) return null;
    return x / y;
}

function operate(operator, x, y) {
    switch(operator) {
       case '+': return add(x, y);
       case '-': return subtract(x, y);
       case '*': return multiply(x, y);
       case '/': return divide(x, y);
       default: return null;
    }
}

var input = '';

function updateDisplay(value) {
    let display = document.querySelector('.display');
    display.textContent = value.toString();
}

function numberPressed(e) {
    let number = parseInt(e.target.textContent);
    input = input.concat(number);
    updateDisplay(input);
}

numberDivs = document.querySelectorAll('.number');
numberDivs.forEach(div => div.addEventListener('click', numberPressed));