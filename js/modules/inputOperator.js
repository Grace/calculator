import { inputEquals } from "./inputEquals.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const inputOperator = (operator) => {
    if(calculatorData.operatorPressed !== true) {
        if(calculatorData.firstOperator === null && calculatorData.secondOperator === null) {
            calculatorData.firstOperator = operator;
            calculatorData.firstOperand = calculatorData.displayValue;
            updateExpressionDisplay(calculatorData.firstOperator, true);
        } else if(calculatorData.firstOperator !== null && calculatorData.secondOperator === null) {
            if(!calculatorData.operatorPressed) {
                calculatorData.secondOperator = operator;
                calculatorData.secondOperand = calculatorData.displayValue;
                inputEquals();
            }
        } else if(calculatorData.firstOperator !== null && calculatorData.secondOperator !== null) {
            if(!calculatorData.operatorPressed) {
                inputEquals();
            }
        } else {
            throw new Error('Unhandled scenario in inputOperator()');
        }
    }
    calculatorData.operatorPressed = true;
};

export { inputOperator };