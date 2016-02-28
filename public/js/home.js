$(document).ready(function(){
  console.log('sanity cehck!');
})

$(document).ready(function(){
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
            slidesToShow: 3,
            infinite: true
          }

        },

        {

            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
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
});


$(".slider").slick({

  // normal options...
  infinite: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});
