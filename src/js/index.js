let button= $('#button'),
    nav = $('#nav');



button.click(function(){
    nav.toggleClass('show')
})

// Smoth scroll on page hash links
    $('a[href*="#"]').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();
                    $("nav").removeClass();
                    $("nav").addClass("animated fadeINLeft")
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - (top_space - 20)
                }, 1500, 'easeInOutExpo');

                return false;
            }
        }
    });