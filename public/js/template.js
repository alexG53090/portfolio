$(document).ready(function(){
  animateLogo();
  grabQuote();
})

function grabQuote(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
  });
}


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
