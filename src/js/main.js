// main.js

var form = require('./modules/form'),
    map = require('./modules/map'),
    menu = require('./modules/menu'),
    phones = require('./modules/phones');

var MegaTaxi = function(win) {
    'use strict';

    this.frm = new form(this);
    this.mp = new map(this);
    this.mn = new menu(this);
    this.pho = new phones(this);
};

var dummy = new MegaTaxi(window);
