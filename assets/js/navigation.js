(function ($) {
    'use strict';

    var windowOn = $(window);

    // Nav Bar Fix
    windowOn.on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });

    //Count Up 

    var counterContainer = $('.counter');
    if (counterContainer.length) {
        counterContainer.counterUp({
            delay: 50,
            time: 500
        });
    }

    //mega menu 
    jQuery(".kaabo-menu > li").first().addClass("show");
    jQuery(".kaabo-menu > li").on({
        mouseenter: function () {
            jQuery(this).siblings().removeClass("show");
            jQuery(this).addClass("show");
        },
    });

    // Search js

    jQuery('.search a').on('click', function () {
        if (jQuery(this).parent().hasClass('open')) {
            jQuery(this).parent().removeClass('open');
        } else {
            jQuery(this).parent().addClass('open');
        }
        return false;
    });

    //why choose slider
    var swiper = new Swiper('.why-choose-slider', {
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 8000,
        },
    });

    //Product Patent slider 
    var swiper = new Swiper(".product-patent-slider", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });


})(jQuery);