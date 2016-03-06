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


$(document).ready(function() {
  animateLogo();
  // Load a quote when first visiting the page
  getQuote();

  // Show tooltips when hovering over the icons below the quote
  $('[data-toggle="tooltip"]').tooltip();
  $('#authorWiki').tooltip({
    title: "View the author on Wikipedia",
    placement: "bottom"
  });
  $('#shareQuote').tooltip({
    title: "Tweet this quote!",
    placement: "bottom"
  });
  $('#authorWiki').click(function() {
    $(this).tooltip("hide");
  });
  $('#shareQuote').click(function() {
    $(this).tooltip("hide");
  });

  // Send tweets in a modal dialog rather than a new _blank target page
  // Also launches the Twitter App instead of a web page on iOS.
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));
});

/*
Call the Forismatic API and format quote + author text
Add context-aware links for wikipedia and twitter.
The IF statement handles unknown authors from the API.
*/
function getQuote() {
  document.getElementById("quote-block").innerHTML = '<i class="fa fa-spinner fa-spin fa-4x" style="color:white"></i>';
  document.getElementById("share-icons").style.visibility = "hidden";
  $.ajax({
    url: "//api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    },
    success: function(data) {
      // only accept quotes of 115 chars or less so tweets don't get truncated
      // max = 140 - 22chars for url - 2 spaces and a tilde = 115
      if ((data.quoteText.length + data.quoteAuthor.length) > 115) {
        getQuote();
        return;
      }
      //format URLs
      var authorWiki = '<a target="_blank" href="https://wikipedia.org/wiki/' + data.quoteAuthor + '"><img class="authorWiki" src="http://tylermoeller.github.io/random-quote-generator/assets/img/logo-wiki.png"></img></a>';
      var shareUrl = encodeURIComponent(data.quoteText + "~" + data.quoteAuthor) + " http://s.codepen.io/TylerMoeller/debug/WQGjvO";
      // added \t to the url to bypass adblocker
      var shareQuote = '<a target="_blank" href="https://twitter.com/intent/twee\tt' + '?text=' + shareUrl + '"><img class="shareQuote" src="http://tylermoeller.github.io/random-quote-generator/assets/img/logo-twit.png"></a>';

      //populate html
      document.getElementById("quote-block").innerHTML = '<p id="quote"></p><p><i id="author"></i></p>';
      document.getElementById("quote").innerHTML = data.quoteText;
      document.getElementById("shareQuote").innerHTML = shareQuote;
      document.getElementById("share-icons").style.visibility = "visible";
      //handle null authors
      if (data.quoteAuthor.length === 0) {
        document.getElementById("author").innerHTML = "~ Anyonymous";
        document.getElementById("authorWiki").innerHTML = '<a href="http://wikipedia.org/wiki/anonymous"><img class="authorWiki" src="http://tylermoeller.github.io/random-quote-generator/assets/img/logo-wiki.png"></img></a>';
      } else {
        document.getElementById("author").innerHTML = "~ " + data.quoteAuthor;
        document.getElementById("authorWiki").innerHTML = authorWiki;
      }
    }
  });
}
