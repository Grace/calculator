import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const clear = () => {
    calculatorData.displayValue = '0';
    calculatorData.firstOperand = null;
    calculatorData.secondOperand = null;
    calculatorData.firstOperator = null;
    calculatorData.secondOperator = null;
    calculatorData.result = null;
    updateDisplay('0');
    updateExpressionDisplay('');
};

export { clear };