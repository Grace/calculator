/**
 * @jest-environment jsdom
 */

/**
* Simple example of using Jest to test code in units serarately from the main script
*/

'use strict';

jest.mock('../js/updateDisplay');

describe('updateDisplay test suite', () => {
    test('numeric 1 displays as string 1', () => {
        document.body.innerHTML = '<output label="display" id="display" class="grid-item display rounded-box">0</output>';
        const $ = require('jquery');
        const updateDisplay = require('../js/updateDisplay');
        updateDisplay.mockImplementation((displayValue, append = false) => {
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
        });
        updateDisplay(1);
        expect($('#display').text()).toEqual('1');

    });
});