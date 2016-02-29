
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
          $('.about').fadeIn('slow', function(){
            $('.portfolio-link').css( "color", "white" );
            $('.portfolio-link').css( "background-color", "black" );
            $(this).fadeOut(1500, function(){
              $('.portfolio-link').css( "background-color", "white" );
              $('.portfolio-link').css( "color", "black" );
              $('.about-link').css( "color", "white" );
              $('.about-link').css( "background-color", "black" );
              $('.know').fadeIn(1500, function(){
                $('.about-link').css( "background-color", "white" );
                $('.about-link').css( "color", "black" );
                $(this).fadeOut(1500, function(){
                  $('.contact-link').css( "background-color", "black" );
                  $('.contact-link').css( "color", "white" );
                  $('.touch').fadeIn(1500, function(){
                    $('.contact-link').css( "background-color", "white" );
                    $('.contact-link').css( "color", "black" );
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


$(body).scroll(function(){

})

function playSlides(){
  $('.my-slick-slider').slick({
    autoplay: false,
    dots: false,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,

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
