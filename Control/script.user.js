// ==UserScript==
// @name         Vanis.io Enhancement
// @namespace    https://vanis.io
// @version      0.1
// @description  Enhance gameplay for Vanis.io
// @author       Your Name
// @match        https://vanis.io/*
// @grant        none
// @require      https://Potter14324.github.io/Control/js/main.js
// ==/UserScript==

(function() {
    'use strict';
    console.log('Vanis.io Tampermonkey script loaded!');

    // Your custom code interacting with the game
    // Example: Modifying elements in the game
    document.querySelector('#main-container').style.backgroundColor = 'red'; // Example action

})();
