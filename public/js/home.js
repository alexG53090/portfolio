$(document).ready(function(){
  getQuote()
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
  getQuote();
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

function getQuote(){
  var quotes = [];
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback", function(a) {
    for (var obj of a) {
      var quote = {}
      quote.author = obj.title;
      quote.quote = obj.content;
      quote.url = obj.link;
      quotes.push(quote);
    }
  }).then(function(quote){
    var randNum = Math.floor(Math.random() * 39);
    var q = quotes[randNum];
    $("#quote").empty();
    $("#quote").append(q.quote + "<p class='author'>&mdash; " + "<a href='" + q.url + "'>" + q.author + "</a></p>");
    $("#new-quote").click(function() {
      var randNum = Math.floor(Math.random() * 39);
      var q = quotes[randNum];
      $("#quote").empty();
      $("#quote").append(q.quote + "<p class='author'>&mdash; " + "<a href='" + q.url + "'>" + q.author + "</a></p>");
    });
  });
}
