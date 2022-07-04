// Variable declarations
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const calculatorButtons = document.querySelectorAll('button.calculator-button');
const expressionDisplay = document.querySelector('#expression');
const display = document.querySelector('#display');

window.addEventListener('keydown', function(e) {
    console.log(e.key);
    let key = e.key.toLowerCase();
    let btn = document.querySelector(`button[data-key='${key}']`);
    if (btn) {
        btn.click();
        console.log(btn);
    }
});

const updateDisplay = () => {
    const display = document.querySelector('#display');
    display.textContent = displayValue;
    if (displayValue.length > 9) {
        display.textContent= displayValue.substring(0, 9);
    }
};

updateDisplay();

function setupClickHandler() {
    calculatorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
                //Debugging key presses:
                console.log(e.target.textContent.toLowerCase());
                // Execute functions depending on button type
                if(button.classList.contains('operand')) {
                    inputOperand(button.textContent);
                    updateDisplay();
                } else if(button.classList.contains('operator')) {
                    inputOperator(button.textContent);
                } else if(button.classList.contains('equals')) {
                    inputEquals();
                    updateDisplay();
                } else if(button.classList.contains('decimal')) {
                    // inputDecimal(calculatorInput);
                    updateDisplay();
                } else if(button.classList.contains('percent')) {
                    inputPercent();
                    updateDisplay();
                } else if(button.classList.contains('sign')) {
                    inputSign();
                    updateDisplay();
                } else if(button.classList.contains('clear'))
                    clearDisplay();
                    updateDisplay();
            }
        )
    }
)};

setupClickHandler();

const inputEquals = () => {
    if (firstOperator === null) {
        // Do nothing
    } else if (firstOperator && !secondOperator) {
        result = operate(firstOperator, firstOperand, secondOperand);
        console.log(`result ${result}`);
        displayValue = result;
        firstOperand = result;
        secondOperand = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
        expressionDisplay.textContent = '';
    }
    console.log(`1st operator ${firstOperator}`);
    console.log(`2nd operator ${secondOperator}`);
    console.log(`1st operand ${firstOperand}`);
    console.log(`2nd operand ${secondOperand}`);
}

const inputOperator = (operator) => {
    if (firstOperator === null && secondOperator === null) {
        // 2nd click
        firstOperator = operator;
        firstOperand = displayValue;
        expressionDisplay.textContent += firstOperator;
    } else if (firstOperator && secondOperator === null) {
        // 2nd operator clicked
        secondOperator = operator;
        secondOperand = displayValue;
    } else {
        console.log('1st operator and 2nd operator equal non-null values');
    }
    console.log(`1st operator ${firstOperator}`);
    console.log(`operator ${operator}`);
    console.log(`2nd operator ${secondOperator}`);
    console.log(`1st operand ${firstOperand}`);
    console.log(`2nd operand ${secondOperand}`);
}

const inputOperand = (operand) => {
    if (firstOperand === null) {
        if (displayValue == 0) {
            // 1st click
            firstOperand = operand;
            displayValue = operand;
            expressionDisplay.textContent += operand;
        }
    } else if (firstOperand !== null && secondOperand === null) {
        if (firstOperator !== null) {
            // 3rd click
            secondOperand = operand;
            displayValue = operand;
            expressionDisplay.textContent += operand;
        } else {
            displayValue += operand;
            expressionDisplay.textContent += operand;
        }
    } else {
        secondOperand += operand;
        displayValue += operand;
        expressionDisplay.textContent += operand;
    }
};

const inputPercent = () => {
    displayValue *= 0.01;
}

const inputSign = () => {
    displayValue = -displayValue;
};

const clearDisplay = () => {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    expressionDisplay.textContent = '';
};


// Operation methods
const add = (x, y) => {
    return Number(x + y);
}

const subtract = (x, y) => {
    return Number(x - y);
}

const multiply = (x, y) => {
    return Number(x * y);
}

const divide = (x, y) => {
    if (y === 0) {
        return 'lol';
    }
    return Number(x / y);
};

const operate = (operator, firstOperand, secondOperand) => {
    let x = +firstOperand;
    let y = +secondOperand;
    switch (operator.toString()) {
       case '+': return add(x, y);
       case '-': return subtract(x, y);
       case '*': return multiply(x, y);
       case '/': return divide(x, y);
       default: return 'NaN';
    }
};