var config = {
    consumer_key: 'ZaPtUltCzS9nUFuSwrQYP0iQM',
    consumer_secret: 'bkeFdOq18cpYCrtigKOrajuURqHsVYRKr6y6S2ve22rronNypt'
};

// module.exports = config;

$(document).ready(function(){
  $('.triangle').hide();
  $('.square').hide();
  $('.circle').hide();
  $('.about').hide();
  $('.greeting').hide();
  $('.know').hide();
  $('.touch').hide();
  $('.replay').hide();
  replay();
  $('.replay').on('click', function(){
    replay();
  })
  playSlides();
})

function replay(){
  $('.triangle').hide();
  $('.square').hide();
  $('.circle').hide();
  $('.about').hide();
  $('.greeting').hide();
  $('.know').hide();
  $('.touch').hide();
  $('.replay').hide();
  $('.greeting').fadeIn('slow', function(){
    $('.square').fadeIn('slow', function(){
      $('.circle').fadeIn('slow', function(){
        $('.triangle').fadeIn('slow', function(){
          $('.portfolio-link').css( "text-decoration", "underline" );
          $('.about').fadeIn('slow', function(){
            $(this).fadeOut(1150, function(){
              $('.portfolio-link').css( "text-decoration", "none" );
              $('.about-link').css( "text-decoration", "underline" );
                $('.know').fadeIn(1150, function(){
                  $('.about-link').css( "text-decoration", "none" );
                    $(this).fadeOut(1000, function(){
                    $('.contact-link').css( "text-decoration", "underline" );
                    $('.touch').fadeIn(1150, function(){
                      $('.touch').fadeOut(1150);
                    $('.contact-link').css( "text-decoration", "none");
                    $('.replay').fadeIn('slow');
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}


function playSlides(){
  $('.slickslide').slick({
    autoplay: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    // dots: true,
    arrows:true,
    appendArrows: $(".projectos"),
    asNavFor: null,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i></button>',
    // the magic
    responsive: [{
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      },
      {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      },
       {
        breakpoint: 300,
        settings: "unslick" // destroys slick
      }]
  });
}
