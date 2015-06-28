(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// main.js

var form = require('./modules/form'),
    map = require('./modules/map'),
    menu = require('./modules/menu');

var MegaTaxi = function(win) {
    'use strict';

    this.frm = new form(this);
    this.mp = new map(this);
    this.mn = new menu(this);
};

var dummy = new MegaTaxi(window);

},{"./modules/form":2,"./modules/map":3,"./modules/menu":4}],2:[function(require,module,exports){
module.exports = function(obj) {

    var Form = {

        form: document.querySelector('#contact-form'),

        init: function() {
            this.process();
            this.bind();
        },

        process: function() {
            this.els = {
                name: this.form.querySelector('#name'),
                email: this.form.querySelector('#email'),
                message: this.form.querySelector('#message'),
                submit: this.form.querySelector('#submit')
            };
        },

        bind: function() {
            var self = this;
            $(this.form).bind('submit', function(e) {
                e.preventDefault();
                self.validateForm();
            });
        },

        validateForm: function() {
            var success = true;

            this.removeError(this.els.name);
            this.removeError(this.els.email);
            this.removeError(this.els.message);

            if (this.els.name.value == '') {
                success = false;
                this.addError(this.els.name);
            }

            if (!this.validateEmail(this.els.email.value)) {
                success = false;
                this.addError(this.els.email);
            }

            if (this.els.message.value == '') {
                success = false;
                this.addError(this.els.message);
            }

            if (success) {
                alert('SUBMIT');
            }
        },

        validateEmail: function(email) {
            var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return exp.test(email);
        },

        addError: function(el) {
            el.style.border = '1px solid red';
        },

        removeError: function(el) {
            el.style.border = 'none';
        }
    };

    Form.init();
}
},{}],3:[function(require,module,exports){
module.exports = function(obj) {

    var map = new google.maps.Map(document.getElementById('mapholder'), {
        center: new google.maps.LatLng(42.2949246, 22.705488),
        zoom:   16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(42.2952442, 22.7060327),
        title: 'Mega Taxi'
    });

    marker.setMap(map);
};
},{}],4:[function(require,module,exports){
module.exports = function(obj) {
    var Menu = {
        navLinks:       $('[role=navigation] ul li'),
        navSections:    $('section.menu-section'),
        animationSpeed: 1000,
        animationEasing:'easeInOutExpo',
        currentLink:    0,
        offset:         125,

        init: function() {
            var self = this;

            this.navLinks.each(function(idx){
                $(this).find('a').on('click', function() {
                    self.scrollAnimation(self.navSections.eq(idx).offset().top, this.hash);
                    return false;
                });
            });

            this.navSections.waypoint(function(direction) {
                if( direction === 'down' ) {
                    self.changeNavigation(this.element);
                }
            }, { offset: '30%' } );

            this.navSections.waypoint(function(direction) {
                if( direction === 'up' ) {
                    self.changeNavigation(this.element);
                }
            }, { offset: '-30%' } );

            $(window).on('debouncedresize', function() {
                this.scrollAnimation(this.navSections.eq(this.currentLink).offset().top);
            });
        },

        scrollAnimation: function(top, hash) {
            $('html, body').stop().animate({
                scrollTop: top - this.offset
            }, this.animationSpeed, this.animationEasing, function() {
                window.location.hash = hash;
            });
        },

        changeNavigation: function($section) {
            this.navLinks.eq(this.currentLink).removeClass('current');
            this.currentLink = $($section).index('section.menu-section');
            this.navLinks.eq(this.currentLink).addClass('current');
        }
    };

    Menu.init();
};
},{}]},{},[1,2,3,4]);
