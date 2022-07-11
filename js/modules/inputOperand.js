import { operate } from "./operations.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const inputOperand = (operand) => {
    if(calculatorData.decimalPressed) {
        calculatorData.decimalString += operand;
        calculatorData.displayValue += operand;
        updateDisplay(calculatorData.displayValue);
        updateExpressionDisplay(operand, true);
        console.log('inputOperand line 11');
    } else {
        calculatorData.operatorPressed = false;
        if (calculatorData.firstOperand === null) {
            if (calculatorData.displayValue === 0 || calculatorData.displayValue === '0') {
                calculatorData.firstOperand = operand;
                calculatorData.displayValue = calculatorData.formatNumber(operand);
                updateDisplay(calculatorData.displayValue);
                updateExpressionDisplay(calculatorData.displayValue, true);
                console.log('inputOperand line 20');
            }
        } else if (calculatorData.firstOperand !== null && calculatorData.secondOperand === null) {
            if (calculatorData.firstOperator !== null) {
                calculatorData.secondOperand = operand;
                calculatorData.displayValue = calculatorData.formatNumber(operand);
                updateDisplay(calculatorData.displayValue);
                updateExpressionDisplay(calculatorData.displayValue, true);
                console.log('inputOperand line 28');
            } else {
                calculatorData.displayValue += calculatorData.formatNumber(operand);
                calculatorData.firstOperand += Number(operand);
                updateDisplay(calculatorData.displayValue);
                updateExpressionDisplay(calculatorData.displayValue);
                console.log('inputOperand line 34');
            }
        } else if (calculatorData.firstOperand !== null && calculatorData.secondOperand !== null) {
            if (calculatorData.firstOperator !== null && calculatorData.secondOperator == null) {
                calculatorData.secondOperand += operand;
                calculatorData.displayValue += calculatorData.formatNumber(operand);
                updateDisplay(calculatorData.displayValue);
                updateExpressionDisplay(calculatorData.displayValue);
                console.log('inputOperand line 42');
            }
            else if (calculatorData.firstOperator !== null && calculatorData.secondOperator !== null) {
                updateExpressionDisplay(calculatorData.secondOperand);
                calculatorData.result = operate(calculatorData.secondOperator, calculatorData.firstOperand, calculatorData.secondOperand);
                calculatorData.displayValue = calculatorData.result;
                updateDisplay(calculatorData.result);
                calculatorData.firstOperand = calculatorData.result;
                calculatorData.secondOperand = null;
                calculatorData.firstOperator = null;
                calculatorData.secondOperator = null;
                calculatorData.result = null;
                console.log('inputOperand line 54');
            }
        } else {
            calculatorData.displayValue += calculatorData.formatNumber(operand);
            calculatorData.secondOperand += Number(operand);
            updateDisplay(operand, true);
            updateExpressionDisplay(operand, true);
            console.log('inputOperand line 61');
        }
    }
};

export { inputOperand };