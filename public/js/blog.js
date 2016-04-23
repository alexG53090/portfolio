$(function () {

		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: ''
			}
		});

		var slides = document.querySelectorAll("section.demo");
		for (var i=0; i<slides.length; i++) {
      var divheight = $(slides[i]).height();
      var divheight = divheight - $("#pin"+i).height();
			new ScrollMagic.Scene({
					triggerElement: slides[i],
				duration: divheight})
				.setPin("#pin"+i)
				.addTo(controller);
		}
	});
