var controller = new ScrollMagic({
  triggerHook: 0
});

var parallax = new TimelineMax().add([
  TweenMax.to(".logo", 5, {opacity: '0', y: '-75px'}),
  TweenMax.to(".greeting", 5, {opacity: '0', y: '-75px'}),
  TweenMax.to(".touch", 5, {opacity: '0', y: '-75px'}),
  TweenMax.to(".fa-angle-double-down", 5, {opacity: '0', y: '-75px'}),
  TweenMax.to(".first-break", 5, {opacity: '0'}),
  TweenMax.to(".projects", 20, {ease:Power1.easeOut}),
  TweenMax.to(".projectos", 20, {ease:Power1.easeOut}),
  TweenMax.to(".dash-wrap", 20, {ease:Power1.easeOut})
]);


var parallaxScene = new ScrollScene({
  triggerElement: '.projects',
  duration: 700
})
.setTween(parallax)
.addTo(controller);

var flyRight = new TimelineMax().add([
  TweenMax.from(".das-work", 1, {ease:Power1.easeOut, y: '-75px'}),
  TweenMax.to('.dash-wrap', 1, {width: "800px"})
])

var project = new ScrollScene({
  triggerElement: '.projectos',
  duration: 300
})
.setTween(flyRight)
.addTo(controller);

var me = new TimelineMax().add([
  TweenMax.to('.about-me', 1, {y: '-100px'}),
  TweenMax.to('.my-face', 1, {y: '-80px'}),
  TweenMax.to('.me', 1, {y: '-80px'}),

  // TweenMax.from('.my-face', 1, {y: '-80px'}),
  // TweenMax.from('.me', 1, {y: '-80px'}),
])

var about = new ScrollScene({
  triggerElement: '.my-face',
  duration: 700
})
.setTween(me)
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
