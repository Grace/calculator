const updateDisplay = (displayValue, append = false) => {
    const display = document.querySelector('#display');
    let text;

    if(displayValue !== 'lol' && (isNaN(displayValue) || displayValue === null)) {
        text = 'NaN';
    } else { 
        text = displayValue.toString();
    }

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