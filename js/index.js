$(document).ready(function(){
var $header = $('#headerHome'),
    $logo = $header.find('.logo img'),
    $navLinks = $header.find('.navigation a'),
    $teamSlider = $('.team');

    if ($teamSlider.length) {
          $teamSlider.slick({
              dots: true,
              autoplay: true,
              speed: 2000,
              autoplaySpeed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              responsive: [{
                  breakpoint: 760,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }]
          })
      }

  $(window).scroll(function() {
    var scrollen = $(document).scrollTop();
    if (scrollen >= 50) {
      $header.css({
        'background-color': '#142C34',
        'opacity': '0.8'
      });
      $logo.css('width', '70px');
      $navLinks.css('line-height', '70px');
    }
    else {
      $header.css({
        'background-color': 'transparent',
        'opacity': '1'
      });
      $logo.css('width', '90px');
      $navLinks.css('line-height', '90px');
    }
  });
});
