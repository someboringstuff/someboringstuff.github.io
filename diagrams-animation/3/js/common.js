$(document).ready(function() {


	var s = Snap.select("#buymyproperty");
	var mainCircle = s.select('#maincircle');
	var lines = s.selectAll('#line');
	var circles = s.selectAll('#circle');


	mainCircle.attr({
			transform: 'S0,0',
			opacity: 1
		});

	circles.attr({
		transform: 'S0,0'
	});

	
	lines.forEach(function(line) {
		line.attr({
			opacity: 0
		});
	});

	



	var animateMain = function() {
		mainCircle.stop().animate({transform: 'S1,1', opacity: 1}, 1500, mina.ease, animateCircles);
	}

	var animateLines = function() {
		lines.forEach(function(line) {
			line.stop().animate({opacity: 1}, 2000, mina.linear);
		});
	}

		var animateCircles = function() {
		circles.forEach(function(circle) {
			circle.stop().animate({transform: 'S1,1'}, ((Math.random()*10)+1)*500, mina.bounce, animateLines);
		});
	}







	animateMain();


	
});