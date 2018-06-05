document.querySelectorAll("#main, #enfuce-logo_1_").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
});

document.querySelectorAll("ellipse").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
    el.style.opacity = '0';
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



var secondDiagramAnimation = anime.timeline({
	autoplay: true
});



secondDiagramAnimation
// main block + enfuce-logo
.add({
	targets: '#enfuce-2 #main',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500, easing: 'linear' }
	],
	scale: [
		{ value: 0.7, duration: 0 },
		{ value: 1, duration: 1000, easing: 'easeOutQuad' }
	],
	complete: function() {
		anime({
			targets: '#enfuce-2 #enfuce-logo_1_',
			scale: 0.9,
			duration: 1500,
			easing: 'easeInOutCubic',
			direction: 'alternate',
			loop: true
		});

		anime({
			targets: '#enfuce-2 ellipse',
			opacity: [
				{ value: 0, duration: 0},
				{ value: 1, duration: 1000, easing: 'linear' }
				
			],
		});
		anime({
			targets: '#enfuce-2 ellipse',
			rotate: '180deg',
			duration: 50000,
			easing: 'linear',
			loop: true
		});
	}
})

.add(fadeInTopBottom('#enfuce-2 #step-1-1-bottom', 500))
.add(fadeInTopBottom('#enfuce-2 #step-1-2-bottom', 500))
.add(fadeInTopBottom('#enfuce-2 #step-1-3-bottom', 500))

.add(fadeInTopBottom('#enfuce-2 #bottom-lines', 1000))

.add(fadeInTopBottom('#enfuce-2 #step-2-1-top', 500))
.add(fadeInTopBottom('#enfuce-2 #step-2-2-top', 500))
.add(fadeInTopBottom('#enfuce-2 #step-2-3-top', 500))

.add(fadeInTopBottom('#enfuce-2 #top-lines', 1000))

.add(fadeInTopBottom('#enfuce-2 #user-top', 1000))
