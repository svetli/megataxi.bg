// main.js

var form = require('./modules/form'),
    map = require('./modules/map');

var MegaTaxi = function(win) {
    'use strict';

    this.frm = new form(this);
    this.mp = new map(this);
};

var dummy = new MegaTaxi(window);
