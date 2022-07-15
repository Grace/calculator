/**
 * @jest-environment jsdom
 */

'use strict';
import { operate } from '../calculatorMath.js';

global.operate = operate;

describe('addition tests', () => {
    test('add 1 + 2', () => {
        let result = operate('+', '1', '2');
        expect(result).toBe('3');
    });

    test('add 0 + 5', () => {
        let result = operate('+', 0, 5);
        expect(result).toBe('5');
    });

    test('add 7 + 7', () => {
        let result = operate('+', 7, '7');
        expect(result).toBe('14');
    });

    test('add 1 + NaN', () => {
        let result = operate('+', 1, NaN);
        expect(result).toBe(NaN);
    });

    test('add A + B', () => {
        let result = operate('+', 'A', 'B');
        expect(result).toBe(NaN);
    });

    test('add null + null', () => {
        let result = operate('+', null, null);
        expect(result).toBe(NaN);
    });
});

describe('subtraction tests', () => {
    test('subtract 1 - 2', () => {
        let result = operate('-', '1', '2');
        expect(result).toBe('-1');
    });

    test('subtract 10 - 3', () => {
        let result = operate('-', 10, 3);
        expect(result).toBe('7');
    });

    test('subtract 7 - 7', () => {
        let result = operate('-', 7, '7');
        expect(result).toBe('0');
    });

    test('subtract 1 - NaN', () => {
        let result = operate('-', 1, NaN);
        expect(result).toBe(NaN);
    });

    test('subtract A - B', () => {
        let result = operate('-', 'A', 'B');
        expect(result).toBe(NaN);
    });

    test('subtract null - null', () => {
        let result = operate('-', null, null);
        expect(result).toBe(NaN);
    });
});

describe('multiply tests', () => {

    test('multiply 0 * 7', () => {
        let result = operate('*', '0', '7');
        expect(result).toBe('0');
    });

    test('multiply 7 * 0', () => {
        let result = operate('*', '7', '0');
        expect(result).toBe('0');
    });

    test('multiply 2 * 5', () => {
        let result = operate('*', '2', '5');
        expect(result).toBe('10');
    });

    test('multiply 2 * 4.5', () => {
        let result = operate('*', 2, 4.5);
        expect(result).toBe('9');
    });

    test('multiply 7 * 7', () => {
        let result = operate('*', 7, '7');
        expect(result).toBe('49');
    });

    test('multiply 1 * NaN', () => {
        let result = operate('*', 1, NaN);
        expect(result).toBe(NaN);
    });

    test('multiply A * B', () => {
        let result = operate('*', 'A', 'B');
        expect(result).toBe(NaN);
    });

    test('multiply null * null', () => {
        let result = operate('*', null, null);
        expect(result).toBe(NaN);
    });
});

describe('divide tests', () => {

    test('divide 0 / 7', () => {
        let result = operate('/', '0', '7');
        expect(result).toBe('0');
    });

    test('divide 7 / 0', () => {
        let result = operate('/', '7', '0');
        expect(result).toBe('lol');
    });

    test('divide 10 / 2', () => {
        let result = operate('/', '10', '2');
        expect(result).toBe('5');
    });

    test('divide 5 / 2', () => {
        let result = operate('/', 5, 2);
        expect(result).toBe('2.5');
    });

    test('multiply 7 / 7', () => {
        let result = operate('/', 7, '7');
        expect(result).toBe('1');
    });

    test('divide 1 / NaN', () => {
        let result = operate('/', 1, NaN);
        expect(result).toBe(NaN);
    });

    test('divide A / B', () => {
        let result = operate('/', 'A', 'B');
        expect(result).toBe(NaN);
    });

    test('divide null / null', () => {
        let result = operate('/', null, null);
        expect(result).toBe(NaN);
    });
});