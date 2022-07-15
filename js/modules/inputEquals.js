import { operate } from "./operate.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

const inputEquals = () => {
    if(calculatorData.decimalPressed === true) {
        calculatorData.displayValue = parseFloat(calculatorData.decimalString).toFixed(1);
        if(calculatorData.firstOperand !== null) {
            calculatorData.secondOperand = calculatorData.displayValue;
        } else {
            calculatorData.firstOperand = calculatorData.displayValue;
        }
        updateDisplay(calculatorData.displayValue);
        updateExpressionDisplay(calculatorData.displayValue, true);
        calculatorData.decimalPressed = false;
    }
    // console.log(`x: ${calculatorData.firstOperand}, ${calculatorData.firstOperator}, y: ${calculatorData.secondOperand}, ${calculatorData.secondOperator}`);
    if(calculatorData.firstOperand == document.querySelector('#display').textContent) {
        if(calculatorData.firstOperator == null) {
            // Do nothing
            console.log('equals line 21');
            console.dir(calculatorData);
            calculatorData.result = operate(calculatorData.secondOperator, calculatorData.firstOperand, calculatorData.secondOperand);
            calculatorData.displayValue = calculatorData.result;
            updateDisplay(calculatorData.displayValue);
            updateExpressionDisplay(calculatorData.displayValue);
            calculatorData.firstOperator = null;
            calculatorData.secondOperand = null;
            calculatorData.secondOperator = null;
        } else if(calculatorData.secondOperand !== null) {
            calculatorData.result = operate(calculatorData.firstOperator, calculatorData.firstOperand, calculatorData.secondOperand);
            console.log(`= ${calculatorData.result}`);
            console.dir(calculatorData);
            calculator.firstOperand = calculatorData.result;
            calculatorData.displayValue = calculatorData.result;
            updateDisplay(calculatorData.displayValue);
            updateExpressionDisplay(calculatorData.displayValue, true);
            calculatorData.firstOperator = null;
            calculatorData.secondOperand = null;
            // calculatorData.operatorPressed = false;
            // calculatorData.result = null;
            console.log(`inputEquals line 32`);
            console.dir(calculatorData);
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
                        console.log(`inputEquals line 46`);
                    } else {
                        console.dir(calculatorData);
                        calculatorData.result = operate(calculatorData.firstOperator, calculatorData.firstOperand, calculatorData.secondOperand);
                        console.log(`= ${calculatorData.result}`);
                        calculatorData.firstOperand = calculatorData.result;
                        calculatorData.displayValue = calculatorData.result;
                        updateDisplay(calculatorData.result);
                        updateExpressionDisplay(`${calculatorData.result}${calculatorData.firstOperator}`);
                        calculatorData.secondOperand = null;
                        calculatorData.firstOperator = null;
                        console.log(`inputEquals line 57`);
                    }
                }
            }
        }
    };

export { inputEquals };