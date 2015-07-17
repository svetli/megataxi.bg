module.exports = function() {
    var Phones = {
        init: function() {
            if(!Modernizr.touch) {
                $(document).on('click', '[href^="tel:"]', function(e) {
                    e.preventDefault();
                });
            }
        }
    };

    Phones.init();
};