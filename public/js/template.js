$(document).ready(function(){
  animateLogo();
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
            document.getElementById('quote').innerHTML = data.quote + '<em id="author"> ' + "<br>" + data.author + '</em>';
            twitterLink = document.getElementById('tweet');
            twitterLink.href = 'https://twitter.com/intent/tweet?text=' + 'Look at my friend\'s personal website!' + ' http://alexbennett.tech/';
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
