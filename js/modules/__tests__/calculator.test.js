

'use strict';
import { jest } from '@jest/globals';
import $ from 'jquery';
// import '../calculatorData';
import { updateDisplay } from '../updateDisplay.js';

global.$ = $;
global.jQuery = $;
global.updateDisplay = updateDisplay;

describe('Calculator', () => {
    beforeAll(async () => {
        // Assumes live server is running on port 5500
        // global.browser = await puppeteer.launch();
        // global.page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/calculator/index.html');
    });

    afterEach(async () => {
        await page.click('button[label="clear"]');
    });

    it('should be titled "Calculator"', async () => {
        await expect(global.page.title()).resolves.toMatch('Calculator');
    });

    it('Pressing 1 should display 1 in #display and #expression', async () => {
        await page.click('button[label="one"]');
        let display = await page.evaluate(() => document.getElementById('display').textContent);
        let expression = await page.evaluate(() => document.getElementById('expression').textContent);
        expect(display).toContain('1');
        expect(expression).toContain('1');
    });

    it('Pressing 1 then 0 then + then 3 should display 13 and set firstOperand to 13, secondOperand to null, firstOperator to null, and result to 13', async () => {
        await page.click('button[label="one"]');
        let display = await page.evaluate(() => document.getElementById('display').textContent);
        let expression = await page.evaluate(() => document.getElementById('expression').textContent);
        await expect(display).toContain('1');
        await expect(expression).toContain('1');
        await page.click('button[label="zero"]');
        display = await page.evaluate(() => document.getElementById('display').textContent);
        expression = await page.evaluate(() => document.getElementById('expression').textContent);
        await expect(display).toContain('10');
        await expect(expression).toContain('10');
        await page.click('button[label="plus"]');
        display = await page.evaluate(() => document.getElementById('display').textContent);
        expression = await page.evaluate(() => document.getElementById('expression').textContent);
        await expect(display).toContain('10');
        await expect(expression).toContain('10+');
        await page.click('button[label="three"]');
        display = await page.evaluate(() => document.getElementById('display').textContent);
        expression = await page.evaluate(() => document.getElementById('expression').textContent);
        await expect(display).toContain('3');
        await expect(expression).toContain('10+3');
        await page.click('button[label="equals"]');
        display = await page.evaluate(() => document.getElementById('display').textContent);
        expression = await page.evaluate(() => document.getElementById('expression').textContent);
        await expect(display).toContain('13');
        await expect(expression).toContain('');
        let cd = await page.evaluate(() => document.defaultView.calculatorData);
        expect(cd.firstOperand).toBe('13');
        expect(cd.secondOperand).toBe(null);
        expect(cd.firstOperator).toBe(null);
        expect(cd.result).toBe('13');
    });
  });