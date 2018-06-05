document.querySelectorAll("#first-block, #enfuce-logo_1_, #step-1-arrows #first, [id*='arrow'], #step-1-arrows #second, #step-1-4, #green-boxes-up, #green-boxes-up-arrow, #step-2-1-arrows, #step-2-2-arrows").forEach(function(el) {
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



var thirdDiagramAnimation = anime.timeline({
	autoplay: true
});



thirdDiagramAnimation

//part 1
.add({
	targets: '#enfuce-3 #first-block',
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
			targets: '#enfuce-3 #enfuce-logo_1_',
			scale: 0.9,
			duration: 1500,
			easing: 'easeInOutCubic',
			direction: 'alternate',
			loop: true
		});
	}
})

.add(fadeInTopBottom('#enfuce-3 #step-1-bottom', 1000))

.add(fadeInTopBottom('#enfuce-3 #step-1-1-bottom', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-1-2-bottom', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-1-3-bottom', 1000))

.add({
	targets: '#enfuce-3 #step-1-4',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 1000, easing: 'linear' }
	],
	scale: [
		{ value: 0.7, duration: 0 },
		{ value: 1, duration: 1000, easing: 'easeOutQuad' }
	],
	offset: '-=1000'
})

.add({
	targets: ['#enfuce-3 #step-1-arrows #first', '#enfuce-3 #step-1-arrows #second'],
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	easing: 'linear',
	complete: function() {
		anime({
			targets: ['#step-1-arrows #first', '#step-1-arrows #second'],
			scaleY: [
				{ value: 0.7, duration: 1000 }
			],
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})

.add({
	targets: '#enfuce-3 #big-rectangle',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 1000 }
	],
	easing: 'linear'
})


//part 2
.add(fadeInTopBottom('#enfuce-3 #step-2-1-top', 1000))
.add(fadeInLeftRight('#enfuce-3 #step-2-text-left', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-2-2-top', 1000))
.add({
	targets: '#enfuce-3 #step-2-arrows #step-2-1-arrows',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	easing: 'linear',
	offset: '-=2000',
	complete: function() {
		anime({
			targets: '#enfuce-3 #step-2-arrows #step-2-1-arrows',
			scaleY: [
				{ value: 0.9, duration: 1000 }
			],
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})
.add(fadeInTopBottom('#enfuce-3 #step-2-3-1-top', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-2-3-2-top', 1000))
.add({
	targets: '#enfuce-3 #step-2-arrows #step-2-2-arrows',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	easing: 'linear',
	offset: '-=1500',
	complete: function() {
		anime({
			targets: '#enfuce-3 #step-2-arrows #step-2-2-arrows',
			scaleY: [
				{ value: 0.7, duration: 1000 }
			],
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})

.add(fadeInTopBottom('#enfuce-3 #step-2-2-green-top', 1000))
.add(fadeInLeftRight('#enfuce-3 #step-2-text-right', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-2-3-green-top', 1000))
.add({
	targets: '#enfuce-3 #green-boxes-up-arrow',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	offset: '-=2000',
	easing: 'linear',
	complete: function() {
		anime({
			targets: '#enfuce-3 #green-boxes-up-arrow',
			scaleY: [
				{ value: 0.9, duration: 1000 }
			],
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})
.add({
	targets: '#enfuce-3 #green-boxes-up',
	opacity: [
		{ value: 0.5, duration: 500 },
		{ value: 1, duration: 500 },
		{ value: 0.5, duration: 500 },
		{ value: 1, duration: 500 }
	],
	easing: 'linear',
	direction: 'alternate'
})




//part 3
.add(fadeInTopBottom('#enfuce-3 #green-box-bottom'))
.add({
	targets: '#enfuce-3 #green-box-bottom',
	opacity: [
		{ value: 0.5, duration: 500 },
		{ value: 1, duration: 500 },
		{ value: 0.5, duration: 500 },
		{ value: 1, duration: 500 }
	],
	easing: 'linear',
	direction: 'alternate'
})
.add(fadeInTopBottom('#enfuce-3 #step-3-1-bottom', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-3-2-bottom', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-3-3-bottom', 1000))
.add(fadeInTopBottom('#enfuce-3 #step-3-4-bottom', 1000))

.add({
	targets: '#enfuce-3 #step-3-1-arrows',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	offset: '-=3000',
	easing: 'linear',
	complete: function() {
		anime({
			targets: ['#enfuce-3 #step-3-1-1-arrow', '#enfuce-3 #step-3-1-2-arrow'],
			scaleY: [
				{ value: 0.9, duration: 1000 }
			],
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})
.add({
	targets: '#enfuce-3 #small-rectangle',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	offset: '-=3000',
	easing: 'linear'
})

.add({
	targets: '#enfuce-3 #step-3-2-arrows',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500 }
	],
	offset: '-=1000',
	easing: 'linear',
	complete: function() {
		anime({
			targets: '#enfuce-3 #step-3-2-arrows',
			scaleY: [
				{ value: 0.9, duration: 1000 }
			],
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})

