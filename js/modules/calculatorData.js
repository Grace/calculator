window.calculatorData = {
  displayValue: "0",
  firstOperand: null,
  secondOperand: null,
  firstOperator: null,
  secondOperator: null,
  operatorPressed: null,
  result: null,
  decimalString: null,
  decimalPressed: null,
  formatNumber: (n) => {
    n = Number(n.toString());
    if(n - Math.floor(n) !== 0) {
      return n.toFixed(1);
    } else {
      return n.toFixed(0);
    }
  },
};