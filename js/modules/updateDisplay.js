const updateDisplay = (displayValue, append = false) => {
    const display = document.querySelector('#display');
    let text = displayValue;
    if (!append) {
        display.textContent = text;
    } else {
        display.textContent += text;
    }
    if (text.length > 9) {
        display.textContent = text.substring(0, 9);
    }
};

export { updateDisplay };