document.querySelectorAll("#balls circle").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
});

document.querySelectorAll("#camera").forEach(function(el) {
    
    el.style.transformOrigin = "740px 420px";

});


document.querySelectorAll("[id*='left']").forEach(function(el) {
	el.style.transform =  'translateX(20px)';
});

document.querySelectorAll("[id*='right']").forEach(function(el) {
	el.style.transform =  'translateX(-20px)';
});

document.querySelectorAll("[id*='top']").forEach(function(el) {
	el.style.transform =  'translateY(20px)';
});

document.querySelectorAll("[id*='bottom']").forEach(function(el) {
	el.style.transform =  'translateY(-20px)';
});


function fadeInLeftRight(target, duration, complete) {
	return {
		targets: target,
		translateX: [
			{ value: 0, duration: duration, easing: 'easeOutQuart' }
		],
		opacity: [
			{ value: 0, duration: 0},
			{ value: 1, duration: duration, easing: 'linear'}
		],
		complete: complete
	}
}

function fadeInTopBottom(target, duration, complete) {
	return {
		targets: target,
		translateY: [
			{ value: 0, duration: duration, easing: 'easeOutQuart' }
		],
		opacity: [
			{ value: 0, duration: 0},
			{ value: 1, duration: duration, easing: 'linear'}
		],
		complete: complete
	}
}

function vertArrow(target, duration) {
	anime({
		targets: target,
		scaleY: [
			{ value: 0.8, duration: duration }
		],
		duration: duration,
		easing: 'linear',
		direction: 'alternate',
		loop: true
	});
}

function horArrow(target, duration) {
	anime({
		targets: target,
		scaleX: [
			{ value: 0.8, duration: duration }
		],
		easing: 'linear',
		direction: 'alternate',
		loop: true
	});
}

function fadeInMoveObject(target, xstart, ystart, xfinish, yfinish) {
	return {
		targets: target,
		translateX: [
			{ value: xstart, duration: 1 },
			{ value: xfinish, duration: 500 }
		],
		translateY: [
			{ value: ystart, duration: 1 },
			{ value: yfinish, duration: 500 }
		],
		opacity: [
			{ value: 0, duration: 0},
			{ value: 1, duration: 500, easing: 'linear'}
		],
		easing: 'easeOutQuart'
	}
}

function blinkObject(target, number) {
	return {
		targets: target,
		opacity: [
			{ value: 0, duration: 350},
			{ value: 1, duration: 350}
		],
		easing: 'linear',
		direction: 'alternate',
		loop: number
	}
}



var fourthDiagramAnimation = anime.timeline({
	autoplay: true
});

anime({
	targets: '#enfuce-4 #camera',
	rotate: [
		{ value: 15, duration: 700 },
		{ value: 0, duration: 700 }
	],
	delay: 1000,
	easing: 'linear',
	loop: true
})



fourthDiagramAnimation

//part 1
.add({
	targets: '#enfuce-4 #main-ball',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500, easing: 'linear' }
	],
	scale: [
		{ value: 0.7, duration: 0 },
		{ value: 1, duration: 1000, easing: 'easeOutQuad' }
	]
})
.add(blinkObject('#enfuce-4 #main-ball', 1))

.add(fadeInMoveObject('#enfuce-4 #ball-1', 0, 20, 0, 0))
.add(blinkObject('#enfuce-4 #ball-1', 1))


.add(fadeInMoveObject('#enfuce-4 #ball-2', -20, 0, 0, 0))
.add(blinkObject('#enfuce-4 #ball-2', 1))


.add(fadeInMoveObject('#enfuce-4 #ball-3', -10, -15, 0, 0))
.add(blinkObject('#enfuce-4 #ball-3', 1))


.add(fadeInMoveObject('#enfuce-4 #ball-4', 10, -15, 0, 0))
.add(blinkObject('#enfuce-4 #ball-4', 1))


.add(fadeInMoveObject('#enfuce-4 #ball-5', 20, 0, 0, 0))
.add(blinkObject('#enfuce-4 #ball-5', 1))

.add({
	targets: '#enfuce-4 #ball-lines path',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 1000,
	easing: 'easeOutQuart',
	complete: function() {
		anime({
			targets: '#enfuce-4 #balls circle',
			scale: [
				{ value: 0.9, duration: 1000, easing: 'linear' },
				{ value: 1, duration: 1000, easing: 'linear' }
			],
			loop: true
		});
	}
})

.add(fadeInMoveObject('#enfuce-4 #icon-1', 0, 20, 0, 0))
.add(fadeInMoveObject('#enfuce-4 #icon-2', -20, 0, 0, 0))
.add(fadeInMoveObject('#enfuce-4 #icon-3', -10, -15, 0, 0))
.add(fadeInMoveObject('#enfuce-4 #icon-4', 10, -15, 0, 0))
.add(fadeInMoveObject('#enfuce-4 #icon-5', 20, 0, 0, 0))

.add(fadeInLeftRight('#enfuce-4 #phone-right', 1000))
.add(fadeInLeftRight('#enfuce-4 #bank-right', 1000))
