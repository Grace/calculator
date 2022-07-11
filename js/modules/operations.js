'use strict'

// Operation methods
const add = (x, y) => {
    return calculatorData.formatNumber(Number(x + y));
}

const subtract = (x, y) => {
    return calculatorData.formatNumber(Number(x - y));
}

const multiply = (x, y) => {
    return calculatorData.formatNumber(Number(x * y));
}

const divide = (x, y) => {
    if (y === 0 || y === '0') {
        return 'lol';
    }
    return calculatorData.formatNumber(Number(x / y));
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

const inputPercent = (n) => {
    return n * 0.01;
}

const inputSign = (n) => {
    return -n;
};

export { operate, inputPercent, inputSign };