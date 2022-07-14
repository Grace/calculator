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
    if((isNaN(firstOperand) || isNaN(secondOperand)) || (firstOperand === null || secondOperand === null)) {
        return NaN;
    }
    let x = Number(firstOperand);
    let y = Number(secondOperand);
    switch (operator.toString()) {
       case '+': return add(x, y);
       case '-': return subtract(x, y);
       case '*': return multiply(x, y);
       case '/': return divide(x, y);
       default: throw Error('Invalid operator parameter for operate().');
    }
};

export { operate };