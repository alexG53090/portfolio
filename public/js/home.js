$(window).load(function() {
  // hideElements();
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
  $('.homer').css('background-color', 'rgb(241,233,21)')
  goToGoogle();
})

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

function dashBoard(){
  $('.pause').on('click', function() {
    $('.slickslide')
    .slick('slickPause')
  });
  $('.play').on('click', function() {
    $('.slickslide')
    .slick('slickPlay')
  });
  $('.replay').on('click', function(){
    replay();
  });
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

function goToGoogle(){
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;
  var isChrome = !!window.chrome && !!window.chrome.webstore;
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if(isChrome){
    console.log('THIS IS CHROME');
  } if(isFirefox){
    console.log('Firefox');
    document.body.innerHTML = "This website depends on technology that is not supported by FireFox, please open this website in Google Chrome or Safari";
  } else {
    console.log('nothing ot report');
  }
}
