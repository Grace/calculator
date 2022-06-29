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

const getX = () => globals.x;
const getY = () => globals.y;
const setX = (n) => globals.x = n;
const setY = (n) => globals.y = n;
const resetXY = () => {
    globals.x = 0;
    globals.y = 0;
}
const setOperator = (newOperator) => globals.operator = newOperator;
const getOperator = () => globals.operator;
const resetOperator = () => globals.operator = null;
const resetOperatorPressedCount = () => globals.operatorPressedCount = 0;
const incrementOperatorPressedCount = () => globals.operatorPressedCount++;
const getOperatorPressedCount = () => globals.operatorPressedCount;

const updateDisplay = (value) => {
    console.log(`value: ${value}, type: ${typeof value}`);
    let display = document.querySelector('.display');
    if(typeof value === 'string') {
        console.log('string type in display function: ' + value);
        document.querySelector('.display').textContent = 'NaN';
    } else if (typeof value === 'number') {
        console.log('number type in display function: ' + value);
        if (value % 1 === 0) { // If value is a whole number, display it as an Integer
            display.textContent = parseInt(value).toString();
        } else { // Otherwise fix to 1 decimal place
            display.textContent = value.toFixed(1);
        }
    }
}

function addToInput(textNumber) {
    globals.input = Number((globals.input.toString()).concat(textNumber.toString()));
}

const getInput = () => globals.input;

function getInputAsNumber() {
    return Number(globals.input);
}

function resetInput() {
    globals.input = '';
}

function numberPressed(e) {
    addToInput(e.target.textContent);
    updateDisplay(getInputAsNumber());
}

numberDivs = document.querySelectorAll('.number');
numberDivs.forEach(div => div.addEventListener('click', numberPressed));

function operatorPressed(e) {
    let newOperator = e.target.textContent;
    if (getOperatorPressedCount() < 1) {
        setOperator(e.target.textContent)
        console.log(`operator: ${getOperator()}`);
        console.log(`current input (x): ${getInputAsNumber()}`);
        setX(getInputAsNumber());
        resetInput();
    } else {
        setY(getInputAsNumber());
        console.log(getY());
        console.log(`current input (y): ${getInputAsNumber()}`);
        console.log(`last operator: ${getOperator()}`);
        result = operate(getOperator(), getX(), getY());
        updateDisplay(result);
        console.log(`result: ${result}`);
        let newOperator = e.target.textContent;
        console.log(`new oeprator ${e.target.textContent}`);
        setOperator(e.target.textContent);
        setX(result);
        console.log(`new x (result): ${getX()}`);
        setY(0);
        resetInput();
        resetOperatorPressedCount();
        console.log(`operatorPressedCount: ${getOperatorPressedCount()}`);
    }
    incrementOperatorPressedCount();
}

operatorDivs = document.querySelectorAll('.operator');
operatorDivs.forEach(div => div.addEventListener('click', operatorPressed));

function equalsPressed(e) {
    console.log(globals.input);
    console.log(globals.operator);
    console.log(`input: ${getInput()}`);
    if(getInput() === 0 && getOperator() === '/') {
        console.log('input is 0 and operator is /');
        updateDisplay('NaN');
        // document.querySelector('.display').textContent = 'NaN';
    } else {
        getY(getInputAsNumber());
        result = operate(getOperator(), getX(), getY());
        updateDisplay(result);
    }
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