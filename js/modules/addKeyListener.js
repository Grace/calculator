const addKeyListener = () => {
    window.addEventListener('keydown', function(e) {
        console.log(e.key);
        let key = e.key.toLowerCase();
        let button = document.querySelector(`button[data-key='${key}']`);
        if (button) {
            button.click();
        }
    });
};

export { addKeyListener };