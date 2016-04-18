var controller = new ScrollMagic({
  triggerHook: 0
});

var parallax = new TimelineMax().add([
  TweenMax.to(".logo", 5, {opacity: '0'}),
  TweenMax.to(".greeting", 5, {opacity: '0'}),
  TweenMax.to(".touch", 5, {opacity: '0'}),
  TweenMax.to(".fa-angle-double-down", 5, {opacity: '0'}),
  TweenMax.to(".first-break", 5, {opacity: '0'}),
  TweenMax.to(".projects", 10, {ease:Power1.easeOut}),
  TweenMax.to(".projectos", 10, {ease:Power1.easeOut}),
  TweenMax.to(".dash-wrap", 10, {ease:Power1.easeOut})
]);


var parallaxScene = new ScrollScene({
  triggerElement: '.projects',
  duration: 200
})
.setTween(parallax)
.addTo(controller);

var flyRight = new TimelineMax().add([
  TweenMax.to(".dash-wrap", 1, {ease:Power1.easeOut, width: '+=400px'}),
  TweenMax.to(".das-work", 1, {ease:Power1.easeOut, y: '-100px'}),
  TweenMax.to(".dash-wrap", 1, {ease:Power1.easeOut, width: '+=400px'})
])

var project = new ScrollScene({
  triggerElement: '.projectos',
  duration: 400
})
.setTween(flyRight)
.addTo(controller);

$(document).ready(function() {
    $(".scroll").click(function(event){
        $('html, body').animate({scrollTop: '+=500px'}, 800);
    });
});


var randomColor = function(){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
var scroll = window.onscroll
