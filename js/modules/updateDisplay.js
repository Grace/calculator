const updateDisplay = (displayValue, append = false) => {
    const display = document.querySelector('#display');
    if (!append) {
        display.textContent = displayValue.toString();
    } else {
        display.textContent += displayValue.toString();
    }
    let displayText = display.textContent.toString();
    if (displayText.length > 9) {
        display.textContent = displayText.substring(0, 9);
    }
};

export { updateDisplay };