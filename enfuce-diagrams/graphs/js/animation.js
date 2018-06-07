document.querySelectorAll("[id*='spike']").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
    el.style.opacity = '0';
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

function blinkObject(target, number) {
	return {
		targets: target,
		opacity: [
			{ value: 0.5, duration: 350},
			{ value: 1, duration: 350}
		],
		easing: 'linear',
		direction: 'alternate',
		loop: number
	}
}



var graphsDiagramAnimation = anime.timeline({
	autoplay: true
});

var path = anime.path('#graph-2-main-mask_1_');

graphsDiagramAnimation

//graph 1
.add({
	targets: ['#graph-1-x-mask', '#graph-1-y-mask'],
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 1000
})

.add({
	targets: ['#graph-1-y-name-top', '#graph-1-x-name-right'],
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
})

.add({
	targets: '#graph-1-main *',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000
})

.add({
	targets: '#graph-1-main-name-right',
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
})

.add({
	targets: '#graph-1-lines-mask *',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 1000,
	complete: function() {
		anime({
			targets: '#graph-1-lines-mask *',
			opacity: [1, 0, 1],
			easing: 'linear',
			duration: 2000,
			loop: true
		});
	}
})

.add({
	targets: '#graph-1-lines-name-right',
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
}) 


//graph-2
.add({
	targets: ['#graph-2-x-mask', '#graph-2-y-mask'],
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 1000,
	delay: 500
})

.add({
	targets: ['#graph-2-y-name-top', '#graph-2-x-name-right'],
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
})

.add({
	targets: '#graph-2-capacity-mask',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 1000
})

.add({
	targets: '#graph-2-capacity-name-right',
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
})

.add({
	targets: '#graph-2-main-mask_1_',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 2000
})

.add({
	targets: '#graph-2-ball',
	opacity: [0, 1],
	duration: 1,
	complete: function() {
		anime({
			targets: '#graph-2-ball',
			translateX: path('x'),
			translateY: path('y'),
			duration: 4000,
			easing: 'linear',
			loop: true
		});
		anime({
			targets: '#graph-2-spike-1',
			opacity: [
				{ value: .7, duration: 350, easing: 'linear' },
				{ value: 0, duration: 350, easing: 'linear' },
				{ value: 0, duration: 2100, easing: 'linear' }
			],
			scale: [
				{ value: .5, duration: 1 },
				{ value: 1.5, duration: 500, easing: 'linear' },
				{ value: 1.5, duration: 2299, easing: 'linear' }
			],
			delay: 1200,
			loop: true
		});
		anime({
			targets: '#graph-2-spike-2',
			opacity: [
				{ value: .7, duration: 350, easing: 'linear' },
				{ value: 0, duration: 350, easing: 'linear' },
				{ value: 0, duration: 300, easing: 'linear' }
			],
			scale: [
				{ value: .5, duration: 1 },
				{ value: 1.5, duration: 500, easing: 'linear' },
				{ value: 1.5, duration: 499, easing: 'linear' }
			],
			delay: 3000,
			loop: true
		});
	}
})

.add({
	targets: ['#graph-2-main-name-right', '#graph-2-lost-name-top'],
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
})

.add({
	targets: '#graph-2-lines-mask *',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 1000,
	complete: function() {
		anime({
			targets: '#graph-2-lines-mask *',
			opacity: [1, 0, 1],
			easing: 'linear',
			duration: 2000,
			loop: true
		});
	}
})

.add({
	targets: '#graph-2-lines-name-right',
	translateY: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	translateX: [
		{ value: 0, duration: 700, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 0, duration: 0},
		{ value: 1, duration: 500, easing: 'linear'}
	],
	offset: '-=500'
}) 
