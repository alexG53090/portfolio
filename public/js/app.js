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
  // TweenMax.from(".das-work", 1, {ease:Power1.easeOut, y: '-75px'}),
  TweenMax.to('.dash-wrap', 1, {width: "800px"})
])

var project = new ScrollScene({
  triggerElement: '.projectos',
  duration: 200
})
.setTween(flyRight)
.addTo(controller);

var me = new TimelineMax().add([
  TweenMax.to('.my-face', 1, {rotationY: 360}),

  // TweenMax.to('.me', 1, {fontSize: "2em"})

])

var about = new ScrollScene({
  triggerElement: '.my-face',
  duration: 300
})
.setTween(me)
.addTo(controller);

var techIcon = new TimelineMax().add([
  TweenMax.staggerTo('.my-stack', 1, {boxShadow:"0px 0px 50px 1px rgba(0,0,0,0.75)", y: '-20px', ease:Quad.easeInOut})
])

var techIcons = new ScrollScene({
  triggerElement: '.my-stack',
  duration:200
})
.setTween(techIcon)
.addTo(controller);

var around = new TimelineMax().add([
  // TweenMax.to('.contact', 100, {backgroundColor:"rgba(0,0,0,0.75);"}),
  TweenMax.staggerTo('.icon', 100, {rotation: 360, ease:Quad.easeInOut}),
  TweenMax.to('.contact', 100, {boxShadow:" inset 0px 0px 50px 1px rgba(255,255,255,1);"})
])

var aroundWeb = new ScrollScene({
  triggerElement: '.contact',
  duration:400
})
.setTween(around)
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
