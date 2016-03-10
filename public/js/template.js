$(document).ready(function(){
  $('.dash-wrap').hide();
  animateLogo();
  playSlides();
  navigator();
  $('.make-carousel').on('click', function(){
    makeCarousel();
    $('.slick-list').css('height', '1200')
    $('.dash-wrap').show();
  })
})

function animateLogo(){
  $('.square').hide();
  $('.circle').hide();
  $('.triangle').hide();
  $('.square').fadeIn(200, function(){
    $('.circle').fadeIn(200, function(){
      $('.triangle').fadeIn(200, function(){
        console.log('Hey you')
      })
    })
  })
}

function navigator(){
  var portfolio = 'portfolio';
  var abour = 'about';
  var contact = 'contact';
  if (window.location.href.indexOf('portfolio')) {
    console.log('portfolio page');
  } else if (window.location.href.indexOf('about')) {
    console.log('about page');
  } else if (window.location.href.indexOf('contact')) {
    console.log('contact page');
  } else {
    console.log('are you even on the site???');
  }
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
    responsive: [
      {
        breakpoint: 2000,
        settings: "unslick"

      },
       {
        breakpoint: 300,
        settings: "unslick"
      }]
  });
}

function makeCarousel(){
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


(function () {
  $(document).ready(function () {
    var quote;
    quote = function () {
      var API_KEY, url;
      url = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous';
      API_KEY = 'NvBtBmdtSImshF8Ul6PZVcHM8rPtp1HIevIjsnu6b1nua1d11M';
      $.ajax({
          url: url,
          type: 'PUT',
          dataType: 'json',
          beforeSend: function (xhr) {
              xhr.setRequestHeader('X-Mashape-Authorization', API_KEY);
          },
          success: function (data) {
            var twitterLink;
            document.getElementById('quote').innerHTML = "'" + data.quote + "'" + '<em id="author"> ' + "<br><br>" + data.author + '</em>';
            twitterLink = document.getElementById('tweet');
            twitterLink.href = 'https://twitter.com/intent/tweet?text=' + data.quote +" -" + data.author + ' http://alexbennett.tech/';
            twitterLink.target = '_blank';
          }
        });
      };
      quote();
      document.getElementById('btn').onclick = function () {
        quote();
      };
  });
}.call(this));
