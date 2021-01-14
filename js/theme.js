jQuery(function($) {
    "use strict";

    //common files
    $("#commonHeader").load("commonHeader.html");
    $("#commonTopBar").load("commonTopBar.html");
    $("#commonRightBar").load("commonRightBar.html");
    $("#commonFooter").load("commonFooter.html");

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    (function () {
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 60
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());

    // Closes the Responsive Menu on Menu Item Click
    $('.canCollapse').click(function() {
        $('.navbar-toggle:visible').click();
    });


    new WOW().init();
});
