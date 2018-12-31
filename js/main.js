
(
	function ($) {
    'use strict';


    /**owl carosel**/
    




















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



















}(jQuery));
