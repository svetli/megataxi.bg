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