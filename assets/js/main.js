/** @format */

(function () {
    'use strict';


    //product tab
    jQuery('#product-tab a[data-bs-toggle="tab"]').on('show.bs.tab', function (e) {
        let target = $(e.target).data('bs-target');
        $(target)
            .addClass('active show')
            .siblings('.tab-pane.active')
            .removeClass('active show')
    });

    //kaabo video slider swipper
    var swiper = new Swiper(".video-slider", {
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // kaabo together slider swipper 
    var swiper = new Swiper(".kaabo-slider", {
        centeredSlides: true,
        spaceBetween: 80,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 2,
            },
        }
    });

    // testimonial slider swipper 
    var swiper = new Swiper(".testimonial-slider", {
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // partner slider
    var swiper = new Swiper(".partner-slider", {
        slidesPerView: 5,
        roundLengths: true,
        loop: true,
        spaceBetween: 20,
    });

    

    // Magnific Popup
    jQuery(document).ready(function () {
        jQuery('.play_btn,.popup-youtube').magnificPopup({
            type: 'iframe',
        });
    });


})(jQuery);


// home page popup section toggle 
function popupToggle(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJnCCeSltnALG6CNQVP-3MiMi74vjXoKf1gzRc_-iwIeujCkXOPnWvCnzFPoq2LHuS9w/exec';
    const form = document.forms['submit-to-google-sheets'];
    const successMessage = document.getElementById('success');
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          success.innerHTML = "Data successfully message";
          setTimeout(function(){
              success.innerHTML = " ";
          }, 5000)
          form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })
  
  }
  
  popupToggle();
  