// Imports
import './modules/calculatorData.js';
import { updateDisplay } from './modules/updateDisplay.js';
import { updateExpressionDisplay } from './modules/updateExpressionDisplay.js';
import { operate, inputSign, inputPercent } from './modules/operations.js';
import { clear } from './modules/clear.js';
import { addKeyListener } from './modules/addKeyListener.js';
import { setupClickHandler } from './modules/setupClickHandler.js';

const initialize = () => {
    setupClickHandler();
    addKeyListener();
};

initialize();