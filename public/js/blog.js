
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
	triggerHook: ''
	}
});

var slides = document.querySelectorAll("section.post");
for (var i=0; i<slides.length; i++) {
  var divheight = $(slides[i]).height();
  var divheight = divheight - $("#pin"+i).height() + 50;
	var blogPost = new ScrollMagic.Scene({
		triggerElement: slides[i],
		duration: divheight
	})
	.setPin("#pin"+ i  )
	.addTo(controller);
}


var controllerTwo = new ScrollMagic.Controller({
	globalSceneOptions: {
	triggerHook: '.one'
	}
});

var blogScene = new ScrollMagic.Scene({
	triggerElement: '.one',
	duration: 300
})
.setPin('.sub-pin-one')
.addTo(controllerTwo)

var blogSceneTwo = new ScrollMagic.Scene({
	triggerElement: '.one',
	duration: 300
})
.setPin('.post-text-3')
.addTo(controllerTwo)


var disappear = new TimelineMax().add([
	TweenMax.to('sub-pin-one', 2, {opacity: 0})
])
