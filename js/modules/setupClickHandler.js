import { clear } from "./clear.js";
import { inputEquals } from "./inputEquals.js";
import { inputSign } from "./operations.js";
import { inputPercent } from "./operations.js";
import { inputDecimal } from "./inputDecimal.js";
import { inputOperand } from "./inputOperand.js";
import { inputOperator } from "./inputOperator.js";
import { updateDisplay } from "./updateDisplay.js";
import { updateExpressionDisplay } from "./updateExpressionDisplay.js";

function setupClickHandler() {
    const calculatorButtons = document.querySelectorAll('button.calculator-button');
    calculatorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
                if(calculatorData.displayValue === 'lol') {
                    clear();
                }
                // Execute functions depending on button type
                if(button.classList.contains('operand')) {
                    console.log(button.textContent);
                    inputOperand(button.textContent);
                } else if(button.classList.contains('operator')) {
                    inputOperator(button.textContent);
                } else if(button.classList.contains('equals')) {
                    inputEquals();
                    updateDisplay(calculatorData.displayValue);
                    updateExpressionDisplay(calculatorData.displayValue);
                } else if(button.classList.contains('decimal')) {
                    inputDecimal(calculatorData.displayValue);
                    updateDisplay(calculatorData.displayValue);
                    updateExpressionDisplay('.', true);
                } else if(button.classList.contains('percent')) {
                    calculatorData.displayValue = inputPercent(calculatorData.displayValue);
                    updateDisplay(calculatorData.displayValue);
                    updateExpressionDisplay(calculatorData.displayValue);
                } else if(button.classList.contains('sign')) {
                    calculatorData.displayValue = inputSign(calculatorData.displayValue);
                    updateDisplay(calculatorData.displayValue);
                    updateExpressionDisplay(calculatorData.displayValue);
                } else if(button.classList.contains('clear'))
                    clear();
            }
        )
    }
)};

export { setupClickHandler };

