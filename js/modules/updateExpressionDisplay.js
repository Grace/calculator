const updateExpressionDisplay = (expression, append = false) => {
    const expressionDisplay = document.querySelector('#expression');
    if (!append) {
        expressionDisplay.textContent = expression.toString();
    } else {
        expressionDisplay.textContent += expression.toString();
    }
    let displayText = expressionDisplay.textContent.toString();
    if(displayText.length > 17) {
        expressionDisplay.textContent = displayText.substring(0, 17);
    }
};

export { updateExpressionDisplay };