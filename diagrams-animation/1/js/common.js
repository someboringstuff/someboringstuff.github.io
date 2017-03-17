
Snap.plugin( function( Snap, Element, Paper, global ) {
	Element.prototype.resetSVG = function() {
      this.stop();
      for( var a=0; a<saveAttributes.length; a++) {
          if( this.data( saveAttributes[a] ) ) {
             this.attr( saveAttributes[a], this.data( saveAttributes[a] ) );   
          };
      };
    };
    
    Element.prototype.storeAttributes = function() {
      for( var a=0; a<saveAttributes.length; a++) {
        if( this.attr( saveAttributes[a]) ) {
            this.data( saveAttributes[a], this.attr( saveAttributes[a] ) );
        };
      };
    };
    
});

var saveAttributes = ['transform', 'opacity', 'stroke-dasharray', 'stroke-dashoffset'];



$('#hoverbutton').mouseover(function() {


	var s = Snap.select("#ralphproperty");
	var mainCircle = s.select('#maincircle');
	var firstCircles = s.selectAll('#first');
	var secondCircles = s.selectAll('#second');
	var endCircles = s.selectAll('#end');
	var lines = s.selectAll('#line');

	mainCircle.attr({
			transform: 'S0,0',
			opacity: 1
		});

	firstCircles.forEach(function(circle) {
		circle.attr({
			transform: 'S0,0',
			opacity: 1
		});
	});

	secondCircles.forEach(function(circle) {
		circle.attr({
			transform: 'S0,0',
			opacity: 1
		});
	});

	endCircles.forEach(function(circle) {
		circle.attr({
			transform: 'S0,0',
			opacity: 1
		});
	});

	lines.forEach(function(line) {
		line.attr({
			'stroke-dashoffset': line.getTotalLength(),
			'stroke-dasharray': line.getTotalLength(),
			opacity: 1
		});
	});

	s.attr({ opacity: 1});

	s.storeAttributes();
	mainCircle.storeAttributes();
	firstCircles.forEach(function(circle) {
		circle.storeAttributes();
	});
	secondCircles.forEach(function(circle) {
		circle.storeAttributes();
	});
	endCircles.forEach(function(circle) {
		circle.storeAttributes();
	});
	lines.forEach(function(line) {
		line.storeAttributes();
	});

	var animateMain = function() {
		mainCircle.stop().animate({transform: 'S1,1', opacity: 1}, 1500, mina.ease, animateLines);
	}

	var animateLines = function() {
		lines.forEach(function(line) {
			line.stop().animate({'stroke-dashoffset': 0}, 2000, mina.linear, animateEndCircles);
		});
		setTimeout(animateFirstCircles,500);
		setTimeout(animateSecondCircles,1000);
	}

	var animateFirstCircles = function() {
		firstCircles.forEach(function(circle) {
			circle.stop().animate({transform: 'S1,1'}, 800, mina.ease);
		});
	}

	var animateSecondCircles = function() {
		secondCircles.forEach(function(circle) {
			circle.stop().animate({transform: 'S1,1', opacity: 1}, 800, mina.ease);
		});
	}

	var animateEndCircles = function() {
		endCircles.forEach(function(circle) {
			circle.stop().animate({transform: 'S1,1'}, 800, mina.ease);
		});
	}

	animateMain();


 $('#hoverbutton').mouseleave(function() {
 	mainCircle.resetSVG();
 	firstCircles.forEach(function(circle) {
		circle.resetSVG();
	});
	secondCircles.forEach(function(circle) {
		circle.resetSVG();
	});
	endCircles.forEach(function(circle) {
		circle.resetSVG();
	});
	lines.forEach(function(line) {
		line.attr({opacity: 0});
	});
});


	
});
