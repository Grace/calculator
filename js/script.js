import { operate, round, changeSign, toPercent } from './modules/calculatorMath.js';

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetDisplay = false;

const operandButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const switchSignButton = document.getElementById('changeSign');
const percentButton = document.getElementById('percent');
const decimalButton = document.getElementById('decimal');
const lastExpressionDisplay = document.getElementById('expression');
const currentDisplay = document.getElementById('display');

window.addEventListener('keydown', handleKeyboardInput);
equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
switchSignButton.addEventListener('click', changeSign);
percentButton.addEventListener('click', percentage);
decimalButton.addEventListener('click', appendDecimal);

operandButtons.forEach((button) =>
  button.addEventListener('click', () => appendOperand(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

function appendOperand(n) {
  if (currentDisplay.textContent === '0' || shouldResetDisplay) resetDisplay();
  currentDisplay.textContent += n;
}

function resetDisplay() {
  currentDisplay.textContent = '';
  shouldResetDisplay = false;
}

function clear() {
  currentDisplay.textContent = '0';
  lastExpressionDisplay.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function percentage() {
    if (shouldResetDisplay) resetDisplay();
    if (currentDisplay.textContent === '') currentDisplay.textContent = '0';
    currentDisplay.textContent = toPercent(currentDisplay.textContent);
}

function switchSign() {
    if (shouldResetDisplay) resetDisplay();
    if (currentDisplay.textContent === '') currentDisplay.textContent = '0';
    currentDisplay.textContent = changeSign(currentDisplay.textContent);
}

function appendDecimal() {
  if (shouldResetDisplay) resetDisplay();
  if (currentDisplay.textContent === '') currentDisplay.textContent = '0';
  if (currentDisplay.textContent.includes('.')) return;
  currentDisplay.textContent += '.';
}

function backspace() {
  currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentDisplay.textContent;
  currentOperation = operator;
  lastExpressionDisplay.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetDisplay) return;
  if (currentOperation === '/' && currentDisplay.textContent === '0') return alert("lol");
  secondOperand = currentDisplay.textContent;
  currentDisplay.textContent = round(operate(currentOperation, firstOperand, secondOperand));
  lastExpressionDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendOperand(e.key);
  if (e.key === '.') appendDecimal();
  if (e.key === '=' || e.key === 'Enter') evaluate();
  if (e.key === 'Backspace') backspace();
  if (e.key === 'Escape' || e.key === 'c') clear();
  if (e.key === 's') switchSign();
  if (e.key === '%') percentage();
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(e.key);
}