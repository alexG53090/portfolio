$(window).load(function() {
 $('#overlay').addClass('hide');
});

$(document).ready(function(){
  $('#loading').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
   function(e) {
     $('#loadingscreen').fadeOut(500);
    //  $('#loadingscreen').remove();
   });
  hideElements();
  playSlides();
  replay();
  dashBoard();
  // getQuote();
  // animateIn();
  console.log(window.location.href);
})

$('.replay').on('click', function(){
  replay();
})

function dashBoard(){
  $('.pause').on('click', function() {
    $('.slickslide')
    .slick('slickPause')
  });
  $('.play').on('click', function() {
    $('.slickslide')
    .slick('slickPlay')
  });
}

function hideElements(){
  $('.triangle').hide();
  $('.square').hide();
  $('.circle').hide();
  $('.about').hide();
  $('.greeting').hide();
  $('.know').hide();
  $('.touch').hide();
  $('.replay').hide();
}

function playSlides(){
  $('.slickslide').slick({
    autoplay: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    arrows:true,
    appendArrows: $(".dashboard"),
    asNavFor: null,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-backward"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-forward"></i></button>',
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
        settings: "unslick"
      }]
  });
}

function animateIn(){
  $(window).on("load",function() {
      function fade() {
        var itemsToAnimate = [];
        var me = $('.me'), icons = $('.icons'), colophon = $('.colophon'), see = $('.see'), resumeTitle = $('.resume-title'), resume = $('.resume');
        itemsToAnimate.push(me, icons, see, resumeTitle, resume);
        itemsToAnimate.forEach(function(index) {
            var objectBottom = $(index).offset().top + $(index).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectBottom < windowBottom - 100) { //object comes into view (scrolling down)
              if ($(index).css('opacity')==0) {
                $(index).fadeTo(1000,1);
              }
            } else {
              if ($(index).css('opacity')==1) {
                $(index).fadeTo(1000,0);
              }
            }
        });
      }
      fade(); //Fade in completely visible elements during page-load
      $(window).scroll(function() {fade();}); //Fade in elements during scroll
  });
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

function replay(){
  $('.know').hide();
  $('.touch').hide();
  $('.replay').hide();
  $('.greeting').fadeIn(300, function(){
    $('.square').fadeIn(200, function(){
      $('.circle').fadeIn(200, function(){
        $('.triangle').fadeIn(200, function(){
          $('.portfolio-link').css( "text-decoration", "underline" );
          $('.about').fadeIn('slow', function(){
            $(this).fadeOut(900, function(){
              $('.portfolio-link').css( "text-decoration", "none" );
              $('.about-link').css( "text-decoration", "underline" );
                $('.know').fadeIn(900, function(){
                  $('.about-link').css( "text-decoration", "none" );
                    $(this).fadeOut(750, function(){
                    $('.contact-link').css( "text-decoration", "underline" );
                    $('.touch').fadeIn(900, function(){
                    $('.replay').fadeIn(900);
                    $('.contact-link').css( "text-decoration", "none");
                    $('.fa-angle').css('color', 'red');
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
