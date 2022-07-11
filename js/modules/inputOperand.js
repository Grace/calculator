import { operate } from "./operations.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const inputOperand = (operand) => {
    if(calculatorData.decimalPressed) {
        calculatorData.decimalString += operand;
        calculatorData.displayValue += operand;
        updateDisplay(calculatorData.displayValue);
        updateExpressionDisplay(calculatorData.displayValue);
    } else {
        calculatorData.operatorPressed = false;
        if (calculatorData.firstOperand === null) {
            if (calculatorData.displayValue === 0 || calculatorData.displayValue === '0') {
                calculatorData.firstOperand = operand;
                calculatorData.displayValue = operand;
                updateDisplay(operand);
                updateExpressionDisplay(calculatorData.firstOperand, true);
            }
        } else if (calculatorData.firstOperand !== null && calculatorData.secondOperand === null) {
            if (calculatorData.firstOperator !== null) {
                calculatorData.secondOperand = operand;
                calculatorData.displayValue = operand;
                updateDisplay(calculatorData.secondOperand);
                updateExpressionDisplay(operand, true);
            } else {
                calculatorData.secondOperand += operand;
                calculatorData.displayValue += operand;
                updateDisplay(operand, true);
                updateExpressionDisplay(operand, true);
            }
        } else if (calculatorData.firstOperand !== null && calculatorData.secondOperand !== null) {
            if (calculatorData.firstOperator !== null && calculatorData.secondOperator == null) {
                calculatorData.secondOperand += operand;
                calculatorData.displayValue += operand;
                updateDisplay(calculatorData.secondOperand);
                updateExpressionDisplay(operand, true);
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
            }
        } else {
            calculatorData.secondOperand += operand;
            calculatorData.displayValue += operand;
            updateDisplay(operand, true);
            updateExpressionDisplay(operand, true);
        }
    }
};

export { inputOperand };