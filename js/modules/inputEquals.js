import { operate } from "./operations.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const inputEquals = () => {
    // console.log(`x: ${calculatorData.firstOperand}, ${calculatorData.firstOperator}, y: ${calculatorData.secondOperand}, ${calculatorData.secondOperator}`);
    if(calculatorData.firstOperand == document.querySelector('#display').textContent) {
        if(calculatorData.firstOperator == null) {
            // Do nothing
        } else if (calculatorData.secondOperand !== null) {
            calculatorData.result = operate(calculatorData.firstOperator, calculatorData.firstOperand, calculatorData.secondOperand);
            calculator.firstOperand = calculatorData.result;
            calculator.firstOperator = null;
            calculator.secondOperand = null;
        }
    } else if(calculatorData.firstOperand !== null) {
            if(calculatorData.secondOperand !== null) {
                if(calculatorData.firstOperator !== null) {
                    if(calculatorData.secondOperator !== null) {
                        calculatorData.result = operate(calculatorData.firstOperator, calculatorData.firstOperand, calculatorData.secondOperand);
                        console.log(`= ${calculatorData.result}`);
                        calculatorData.firstOperand = calculatorData.result;
                        calculatorData.firstOperator = calculatorData.secondOperator;
                        calculatorData.displayValue = calculatorData.result;
                        updateDisplay(calculatorData.result);
                        updateExpressionDisplay(`${calculatorData.result}${calculatorData.firstOperator}`);
                        calculatorData.secondOperand = null;
                        calculatorData.secondOperator = null;
                    } else {
                        calculatorData.result = operate(calculatorData.firstOperator, calculatorData.firstOperand, calculatorData.secondOperand);
                        // bug in equals
                        console.log(`= ${calculatorData.result}`);
                        calculatorData.firstOperand = calculatorData.result;
                        calculatorData.displayValue = calculatorData.result;
                        updateDisplay(calculatorData.result);
                        updateExpressionDisplay(`${calculatorData.result}${calculatorData.firstOperator}`);
                        calculatorData.secondOperand = null;
                        calculatorData.firstOperator = null;
                    }
                }
            }
        }
    };

export { inputEquals };