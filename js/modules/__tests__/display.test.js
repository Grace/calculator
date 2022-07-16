'use strict';

describe('Calculator', () => {

    beforeAll(async () => {
        // Assumes live server is running on port 5500
        await page.goto('http://127.0.0.1:5500/calculator/index.html');
    });

    afterEach(async () => {
        await page.click('button[label="clear"]');
    });

    it('should be titled "Calculator"', async () => {
        await expect(global.page.title()).resolves.toMatch('Calculator');
    });

    it('1 + 1 = 2', async () => {
        await page.click('button[label="one"]');
        let display = await page.evaluate(() => document.getElementById('display').textContent);
        let expression = await page.evaluate(() => document.getElementById('expression').textContent);
        expect(display).toContain('1');
        expect(expression).toContain('');
        await page.click('button[label="plus"]');
        display = await page.evaluate(() => document.getElementById('display').textContent);
        expression = await page.evaluate(() => document.getElementById('expression').textContent);
        expect(display).toContain('1');
        expect(expression).toContain('1 +');
        await page.click('button[label="one"]');
        await page.click('button[label="equals"]');
        display = await page.evaluate(() => document.getElementById('display').textContent);
        expression = await page.evaluate(() => document.getElementById('expression').textContent);
        expect(display).toContain('2');
        expect(expression).toContain('1 + 1 =');
    });
  });