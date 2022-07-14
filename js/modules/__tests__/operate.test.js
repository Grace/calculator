/**
 * @jest-environment jsdom
 */

'use strict';

require('../calculatorData.js');

describe('addition tests', () => {
    test('add 1 + 2', () => {
        const operate = require('../operate.js');
        let result = operate('+', '1', '2');
        expect(result).toBe('3');
    });

    test('add 0 + 5', () => {
        const operate = require('../operate.js');
        let result = operate('+', 0, 5);
        expect(result).toBe('5');
    });

    test('add 7 + 7', () => {
        const operate = require('../operate.js');
        let result = operate('+', 7, '7');
        expect(result).toBe('14');
    });

    test('add 1 + NaN', () => {
        const operate = require('../operate.js');
        let result = operate('+', 1, NaN);
        expect(result).toBe('NaN');
    });

    test('add A + B', () => {
        const operate = require('../operate.js');
        let result = operate('+', 'A', 'B');
        expect(result).toBe('NaN');
    });
});