// Variable declarations
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let operatorPressed = false;
let result = null;

const calculatorButtons = document.querySelectorAll('button.calculator-button');

window.addEventListener('keydown', function(e) {
    console.log(e.key);
    let key = e.key.toLowerCase();
    let btn = document.querySelector(`button[data-key='${key}']`);
    if (btn) {
        btn.click();
        console.log(btn);
    }
});

const updateDisplay = (displayValue, append = false) => {
    const display = document.querySelector('#display');
    if (!append) {
        display.textContent = displayValue.toString();
    } else {
        display.textContent += displayValue.toString();
    }
    let displayText = display.textContent.toString();
    if (displayText.length > 9) {
        display.textContent = displayText.substring(0, 9);
    }
};

const updateExpressionDisplay = (expression, append = false) => {
    const expressionDisplay = document.querySelector('#expression');
    if (!append) {
        expressionDisplay.textContent = expression.toString();
    } else {
        expressionDisplay.textContent += expression.toString();
    }
    let displayText = expressionDisplay.textContent.toString();
    if(displayText.length > 17) {
        expressionDisplay.textContent = displayText.substring(0, 17);
    }
};

function setupClickHandler() {
    calculatorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
                if(displayValue === 'lol') {
                    clearDisplay();
                }
                // Execute functions depending on button type
                if(button.classList.contains('operand')) {
                    inputOperand(button.textContent);
                    updateDisplay(displayValue);
                } else if(button.classList.contains('operator')) {
                    inputOperator(button.textContent);
                } else if(button.classList.contains('equals')) {
                    inputEquals();
                    updateDisplay(displayValue);
                    updateExpressionDisplay(displayValue);
                } else if(button.classList.contains('decimal')) {
                    // TODO: implement decimal functionality
                    inputDecimal();
                    updateDisplay(displayValue);
                    updateExpressionDisplay(displayValue);
                } else if(button.classList.contains('percent')) {
                    inputPercent();
                    updateDisplay(displayValue);
                    updateExpressionDisplay(displayValue);
                } else if(button.classList.contains('sign')) {
                    inputSign();
                    updateDisplay(displayValue);
                    updateExpressionDisplay(displayValue);
                } else if(button.classList.contains('clear'))
                    clearDisplay();
            }
        )
    }
)};

const initialize = () => {
    updateDisplay(0);
    setupClickHandler();
}

initialize();

const inputEquals = () => {
    console.log(`x: ${firstOperand}, ${firstOperator}, y: ${secondOperand}, ${secondOperator}`);
    if(firstOperand == document.querySelector('#display').textContent) {
        // Do nothing
    }
    if(firstOperand !== null) {
        if(secondOperand !== null) {
            if(firstOperator !== null) {
                if(secondOperator !== null) {
                    let result = operate(firstOperator, firstOperand, secondOperand);
                    console.log(`= ${result}`);
                    firstOperand = result;
                    firstOperator = secondOperator;
                    displayValue = result;
                    updateDisplay(result);
                    updateExpressionDisplay(`${result}${firstOperator}`);
                    secondOperand = null;
                    secondOperator = null;
                } else {
                    let result = operate(firstOperator, firstOperand, secondOperand);
                    console.log(`= ${result}`);
                    firstOperand = result;
                    displayValue = result;
                    updateDisplay(result);
                    updateExpressionDisplay(`${result}${firstOperator}`);
                    secondOperand = null;
                    firstOperator = null;
                }
            }
        }
    }
}

const inputOperator = (operator) => {
    if(firstOperator === null && secondOperator === null) {
        firstOperator = operator;
        firstOperand = displayValue;
        updateExpressionDisplay(firstOperator, true);
    } else if(firstOperator !== null && secondOperator === null) {
        if(!operatorPressed) {
            secondOperator = operator;
            secondOperand = displayValue;
            inputEquals();
        }
    } else if(firstOperator !== null && secondOperator !== null) {
        if(!operatorPressed) {
            inputEquals();
        }
    } else {
        throw new Error('Unhandled scenario in inputOperator()');
    }
}

const inputOperand = (operand) => {
    operatorPressed = false;
    if (firstOperand === null) {
        if (displayValue === 0 || displayValue === '0') {
            firstOperand = operand;
            displayValue = operand;
            updateDisplay(operand);
            updateExpressionDisplay(firstOperand, true);
        }
    } else if (firstOperand !== null && secondOperand === null) {
        if (firstOperator !== null) {
            secondOperand = operand;
            displayValue = operand;
            updateDisplay(secondOperand);
            updateExpressionDisplay(operand, true);
        } else {
            displayValue += operand;
            updateDisplay(operand, true);
            updateExpressionDisplay(operand, true);
        }
    } else if (firstOperand !== null && secondOperand !== null) {
        if (firstOperator !== null && secondOperator == null) {
            updateExpressionDisplay(secondOperand);
            updateExpressionDisplay(secondOperand, true);
        }
        else if (firstOperator !== null && secondOperator !== null) {
            result = operate(secondOperator, firstOperand, secondOperand);
            displayValue = result;
            updateDisplay(result);
            firstOperand = result;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand += operand;
        displayValue += operand;
        updateDisplay(operand, true);
        updateExpressionDisplay(operand, true);
    }
};

const inputDecimal = () => {
    throw new Error('inputDecimal not implemented yet');
}

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
    updateDisplay(0);
    updateExpressionDisplay('');
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
    let x = Number(firstOperand);
    let y = Number(secondOperand);
    switch (operator.toString()) {
       case '+': return add(x, y);
       case '-': return subtract(x, y);
       case '*': return multiply(x, y);
       case '/': return divide(x, y);
       default: return 'NaN';
    }
};