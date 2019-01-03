
(
	function ($) {
    'use strict';



    /** mixitup */
    
    //var containerEl = $('#project_mix');
    var mixer = mixitup('#project_mix');


    /*  =========================
            Owl Carousel
        ========================= */
    /*---- main slider ----*/
    var slider_pulse = $('.slider-wraper');
    slider_pulse.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Owl Carousel Animation
    slider_pulse.on('translate.owl.carousel', function () {
        $('.slider-info h2').removeClass('animated fadeInDown').css('opacity', '0');
        $(".slider-info h3").removeClass("animated slideInRight").css("opacity", "0");
        $('.slider-info p').removeClass('animated fadeInUp').css('opacity', '0');
        $('.slider-info .button').removeClass('animated fadeIn').css('opacity', '0');
    });
    slider_pulse.on('translated.owl.carousel', function () {
        $('.slider-info h2').addClass('animated fadeInDown').css('opacity', '1');
        $(".slider-info h3").addClass("animated slideInRight").css("opacity", "1");
        $('.slider-info p').addClass('animated fadeInUp').css('opacity', '1');
        $('.slider-info .button').addClass('animated fadeIn').css('opacity', '1');
    });

    


// all-team-member slick
$('.all-team-member').slick({
    arrows:false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 1100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  //counter count 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



  



  
















}(jQuery));
