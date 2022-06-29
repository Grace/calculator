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
    if (y === 0) return 'NaN. Press C.';
    return x / y;
}

function modulus(x, y) {
    return x % y;
}

function operate(operator, x, y) {
    if (operator === null) {
        return 'Err: null operator';
    }
    switch(operator.toString()) {
       case '+': return add(x, y);
       case '-': return subtract(x, y);
       case '*': return multiply(x, y);
       case '/': return divide(x, y);
       case '%': return modulus(x, y);
       default: return 'Error';
    }
}

var input = '';
var x = 0;
var y = 0;
var operator = null;
var operatorPressedCount = 0;

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

function operatorPressed(e) {
    if (operatorPressedCount < 1) {
        operator = e.target.textContent;
        console.log(`operator: ${operator}`);
        console.log(`current input: ${input}`);
        x = parseInt(input);
        input = '';
    } else {
        y = parseInt(input);
        console.log(`current input: ${input}`);
        let lastOperator = operator;
        console.log(`last operator: ${lastOperator}`);
        result = operate(lastOperator, x, y);
        updateDisplay(result);
        console.log(`result: ${result}`);
        let newOperator = e.target.textContent;
        operator = newOperator;
        console.log(`new operator: ${newOperator}`);
        x = result;
        console.log(`new x (result): ${x}`);
        y = 0;
        input = '';
        operatorPressedCount = 0;
        console.log(`operatorPressedCount: ${operatorPressedCount}`);
    }
    operatorPressedCount++;
}

operatorDivs = document.querySelectorAll('.operator');
operatorDivs.forEach(div => div.addEventListener('click', operatorPressed));

function equalsPressed(e) {
    y = parseInt(input);
    result = operate(operator, x, y);
    updateDisplay(result);
    clear();
}

equalsDiv = document.querySelector('.equals');
equalsDiv.addEventListener('click', equalsPressed);

function clear() {
    x = 0;
    y = 0;
    input = '';
    operator = null;
    operatorPressedCount = 0;
}

function clearPressed(e) {
    clear();
    updateDisplay('0');
}

clearDiv = document.querySelector('.clear');
clearDiv.addEventListener('click', clearPressed);