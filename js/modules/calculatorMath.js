'use strict'

// Convenience methods
const round = (n) => {
    return Math.round(n * 1000) / 1000;
};

const changeSign = (n) => {
    return (-Number(n)).toString();
};

const toPercent = (n) => {
    return (Number(n) * 0.01).toFixed(2);
};

const formatNumber = (n) => {
    n = Number(n.toString());
    if(n - Math.floor(n) !== 0) {
      return n.toFixed(1);
    } else {
      return n.toFixed(0);
    }
};

// Operation methods
const add = (x, y) => {
    return formatNumber(Number(x + y));
}

const subtract = (x, y) => {
    return formatNumber(Number(x - y));
}

const multiply = (x, y) => {
    return formatNumber(Number(x * y));
}

const divide = (x, y) => {
    if (y === 0 || y === '0') {
        return 'lol';
    }
    return formatNumber(Number(x / y));
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

export { operate, round, changeSign, toPercent };