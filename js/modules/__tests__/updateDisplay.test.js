/**
 * @jest-environment jsdom
 */

/**
* Simple example of using Jest to test code in units serarately from the main script
*/

'use strict';
import $ from 'jquery';
import { updateDisplay } from '../updateDisplay.js';

global.$ = $;
global.jQuery = $;
global.updateDisplay = updateDisplay;

describe('updateDisplay test suite', () => {
    test('numeric 1 displays as string 1', () => {
        document.body.innerHTML = '<output label="display" id="display" class="grid-item display rounded-box">0</output>';
        updateDisplay(1);
        expect($('#display').text()).toEqual('1');
    });
    test('string 7 displays as string 7', () => {
        document.body.innerHTML = '<output label="display" id="display" class="grid-item display rounded-box">0</output>';
        updateDisplay('7');
        expect($('#display').text()).toEqual('7');
    });
    test('undefined displays as NaN', () => {
        document.body.innerHTML = '<output label="display" id="display" class="grid-item display rounded-box">0</output>';
        updateDisplay(undefined);
        expect($('#display').text()).toEqual('NaN');
    });
    test('null displays as NaN', () => {
        document.body.innerHTML = '<output label="display" id="display" class="grid-item display rounded-box">0</output>';
        updateDisplay(null);
        expect($('#display').text()).toEqual('NaN');
    });
});