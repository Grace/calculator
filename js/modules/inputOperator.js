import { inputEquals } from "./inputEquals.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const inputOperator = (operator) => {
    calculatorData.decimalPressed = false;
    if(calculatorData.operatorPressed !== true) {
        if(calculatorData.firstOperator === null && calculatorData.secondOperator === null) {
            calculatorData.firstOperator = operator;
            calculatorData.firstOperand = calculatorData.displayValue;
            updateExpressionDisplay(calculatorData.firstOperator, true);
            console.log('inputOperator line 12');
        } else if(calculatorData.firstOperator !== null && calculatorData.secondOperator === null) {
            if(!calculatorData.operatorPressed) {
                calculatorData.secondOperator = operator;
                calculatorData.secondOperand = calculatorData.displayValue;
                console.log('inputOperator line 17');
                console.dir(calculatorData);
                updateExpressionDisplay('');
                inputEquals();
            }
        } else if(calculatorData.firstOperator !== null && calculatorData.secondOperator !== null) {
            if(!calculatorData.operatorPressed) {
                console.log('inputOperator line 22');
                inputEquals();
            }
        } else {
            throw new Error('Unhandled scenario in inputOperator()');
        }
    }
    calculatorData.operatorPressed = true;
};

export { inputOperator };