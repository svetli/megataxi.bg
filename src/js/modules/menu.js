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