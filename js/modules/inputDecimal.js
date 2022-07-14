const inputDecimal = () => {
    // If displayValue doesn't contain ".", append "." to decimalString
    if(!calculatorData.displayValue.includes('.')) {
        calculatorData.decimalString = calculatorData.displayValue.toString() + '.';
        calculatorData.displayValue = calculatorData.decimalString;
        calculatorData.decimalPressed = true;
    }
}

export { inputDecimal };