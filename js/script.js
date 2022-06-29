function add(x, y) {
    return Number(x + y);
}

function subtract(x, y) {
    return Number(x - y);
}

function multiply(x, y) {
    return Number(x * y);
}

function divide(x, y) {
    if (y === 0) return 'NaN. Press C.';
    return Number(x / y);
}

function modulus(x, y) {
    return Number(x % y);
}

function operate(operator, x, y) {
    switch(operator.toString()) {
       case '+': return add(x, y);
       case '-': return subtract(x, y);
       case '*': return multiply(x, y);
       case '/': return divide(x, y);
       case '%': return modulus(x, y);
       default: return 'Error';
    }
}

let globals = {
    input: '',
    x: 0,
    y: 0,
    operator: null,
    operatorPressedCount: 0
}

var input = '';
var x = 0;
var y = 0;
var operator = null;
var operatorPressedCount = 0;

const setX = (n) => x = n;
const setY = (n) => y = n;
const resetXY = () => {
    x = 0;
    y = 0;
}
const setOperator = (newOperator) => operator = newOperator;
const getOperator = () => operator;
const resetOperator = () => operator = null;
const resetOperatorPressedCount = () => operatorPressedCount = 0;
const incrementOperatorPressedCount = () => operatorPressedCount++;
const getOperatorPressedCount = () => operatorPressedCount;

function updateDisplay(value) {
    console.log(`value: ${value}, type: ${typeof value}`);
    let display = document.querySelector('.display');
    // If value is a whole number, display it as an Integer
    if (value % 1 === 0) {
        display.textContent = parseInt(value).toString();
    } else { // Otherwise fix to 1 decimal place
        display.textContent = value.toFixed(1);
    }
}

function addToInput(textNumber) {
    let number = parseInt(textNumber);
    input = Number((input.toString()).concat(textNumber.toString()));
}

function getInputAsNumber() {
    return Number(input);
}

function resetInput() {
    input = '';
}

function numberPressed(e) {
    addToInput(e.target.textContent);
    updateDisplay(getInputAsNumber());
}

numberDivs = document.querySelectorAll('.number');
numberDivs.forEach(div => div.addEventListener('click', numberPressed));

function operatorPressed(e) {
    if (operatorPressedCount < 1) {
        setOperator(e.target.textContent)
        console.log(`operator: ${operator}`);
        console.log(`current input: ${input}`);
        setX(getInputAsNumber());
        resetInput();
    } else {
        setY(getInputAsNumber());
        console.log(`current input: ${input}`);
        let lastOperator = operator;
        console.log(`last operator: ${lastOperator}`);
        result = operate(lastOperator, x, y);
        updateDisplay(result);
        console.log(`result: ${result}`);
        setOperator(e.target.textContent);
        console.log(`new operator: ${e.target.textContent}`);
        setX(result);
        console.log(`new x (result): ${x}`);
        setY(0);
        resetInput();
        resetOperatorPressedCount();
        console.log(`operatorPressedCount: ${getOperatorPressedCount()}`);
    }
    operatorPressedCount++;
}

operatorDivs = document.querySelectorAll('.operator');
operatorDivs.forEach(div => div.addEventListener('click', operatorPressed));

function equalsPressed(e) {
    setY(getInputAsNumber());
    result = operate(operator, x, y);
    updateDisplay(result);
    clear();
}

equalsDiv = document.querySelector('.equals');
equalsDiv.addEventListener('click', equalsPressed);

function clear() {
    resetXY();
    resetInput();
    resetOperator();
    resetOperatorPressedCount();
}

function clearPressed(e) {
    clear();
    updateDisplay(0);
}

clearDiv = document.querySelector('.clear');
clearDiv.addEventListener('click', clearPressed);