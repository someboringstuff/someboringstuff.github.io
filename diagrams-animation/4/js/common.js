$(document).ready(function() {


	var randomNumber = function() {
			return Math.floor(Math.random() * (850 - 768 + 1)) + 768;
	  //376 = svg viewbox height;
	  //750 ~ 376*2
	}

	var randomBoolean = function(){
		if(Math.random() < .5) {
			return 1;
		}
		else {
			return -1;
		}
	}

	var s = Snap.select("#atwelljames");
	var mainCircle = s.select('#maincircle');
	var lines = s.selectAll('#line');
	var circles = s.selectAll('#circle');


	mainCircle.attr({
		transform: 'S0,0',
		opacity: 1
	});

	circles.forEach(function(circle) {
		circle.attr({
			transform: 't'+randomNumber()*randomBoolean()+','+randomNumber()*randomBoolean()
		});
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
			circle.stop().animate({transform: 't0,0'}, 2000, mina.easein, animateLines);
		});
	}







	animateMain();


	
});