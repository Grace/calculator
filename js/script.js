// Imports
import './modules/calculatorData.js';
import { addKeyListener } from './modules/addKeyListener.js';
import { setupClickHandler } from './modules/setupClickHandler.js';

const initialize = () => {
    setupClickHandler();
    addKeyListener();
};

initialize();