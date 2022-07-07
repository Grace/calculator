import { operate } from "./operations.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

// Bug: Adding operands after an operator is pressed does not display in both displays properly

const inputOperand = (operand) => {
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
            calculatorData.displayValue += operand;
            updateDisplay(operand, true);
            updateExpressionDisplay(operand, true);
        }
    } else if (calculatorData.firstOperand !== null && calculatorData.secondOperand !== null) {
        if (calculatorData.firstOperator !== null && calculatorData.secondOperator == null) {
            updateDisplay(calculatorData.secondOperand);
            updateExpressionDisplay(calculatorData.secondOperand, true);
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
};

export { inputOperand };