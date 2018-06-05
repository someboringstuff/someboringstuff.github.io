document.querySelectorAll("#enfuce-logo, [id*='arrow']").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
    el.style.opacity = '0'
});

document.querySelectorAll("circle").forEach(function(el) {
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



var firstDiagramAnimation = anime.timeline({
	autoplay: true
});



firstDiagramAnimation
//enfuce-logo
.add({
	targets: '#enfuce-logo',
	opacity: [
		{ value: 0, duration: 0 },
		{ value: 1, duration: 500, easing: 'linear' }
	],
	scale: [
		{ value: 0.5, duration: 0 },
		{ value: 1, duration: 1000, easing: 'easeOutQuad' }
	],
	complete: function() {
		anime({
			targets: '#enfuce-logo',
			scale: 0.9,
			duration: 1500,
			easing: 'easeInOutCubic',
			direction: 'alternate',
			loop: true
		});
	}
})

.add(fadeInLeftRight('#enfuce-1 #step-1-1 > g', 1000))

.add(fadeInTopBottom('#enfuce-1 #step-1-2 > g', 1000))

.add(fadeInLeftRight('#enfuce-1 #step-1-3 > g', 1000, function() {
		anime({
			targets: '#enfuce-1 circle',
			opacity: [
				{ value: 0, duration: 0},
				{ value: 1, duration: 1000, easing: 'linear' }
				
			],
		});
		anime({
			targets: '#enfuce-1 circle',
			rotate: '180deg',
			duration: 50000,
			easing: 'linear',
			loop: true
		});	
	}))

//step-2-1
.add(fadeInTopBottom('#enfuce-1 [id*="step-2-1"]', 1000, function() {vertArrow('#enfuce-1 #step-2-1-arrow', 1000)}))

//step-2-2
.add(fadeInLeftRight('#enfuce-1 [id*="step-2-2"]', 1000, function() {horArrow('#enfuce-1 #step-2-2-arrow', 1000)}))


//step-3 (side one)
.add(fadeInTopBottom('#enfuce-1 [id*="step-3"]', 1000, function() {vertArrow('#enfuce-1 #step-3-arrow', 1000)}))

//step-2-3
.add(fadeInTopBottom('#enfuce-1 [id*="step-2-3"]', 1000, function() {vertArrow('#enfuce-1 #step-2-3-arrow', 1000)}))

//step-2-4
.add(fadeInLeftRight('#enfuce-1 [id*="step-2-4"]', 1000, function() {horArrow('#enfuce-1 #step-2-4-arrow', 1000)}));

