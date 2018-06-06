document.querySelectorAll("#balls > circle, #icons > [id*='icon']").forEach(function(el) {
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



var fourthDiagramAnimation = anime.timeline({
	autoplay: true
});

var balls = ['#enfuce-4 #ball-1', '#enfuce-4 #ball-2', '#enfuce-4 #ball-3', '#enfuce-4 #ball-4', '#enfuce-4 #ball-5'],
	lines = ['#enfuce-4 #line-1', '#enfuce-4 #line-2', '#enfuce-4 #line-3', '#enfuce-4 #line-4', '#enfuce-4 #line-5'],
	icons = ['#enfuce-4 #icon-1', '#enfuce-4 #icon-2', '#enfuce-4 #icon-3', '#enfuce-4 #icon-4', '#enfuce-4 #icon-5'],
	coordinates = [[0, 20], [-20, 0], [-10, -15], [10, -15], [20, 0]];

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
		{ value: 1, duration: 350, easing: 'linear' }
	],
	scale: [
		{ value: 0.7, duration: 0 },
		{ value: 1, duration: 500, easing: 'easeOutQuad' }
	]
})

.add({
	targets: balls,
	translateX: [
		{ value: function(target, index) {
				return coordinates[index][0];
			},
			duration: 1 
		},
		{ value: 0, duration: 500 }
	],
	translateY: [
		{ value: function(target, index) {
				return coordinates[index][1];
			},
			duration: 1 
		},
		{ value: 0, duration: 500 }
	],
	delay: function(target, index) {
		return index * 300;
	},
	opacity: [
		{ value: 0, duration: 1 },
		{ value: 1, duration: 350 }	
	],
	easing: 'linear',
	complete: function() {
		anime({
			targets: balls,
			scale: [
				{ value: 0.8, duration: 350 },
				{ value: 1, duration: 350},
				{ value: 1, duration: 2000}
			],
			delay: function(target, index) {
				return index * 300;
			},
			easing: 'linear',
			loop: true
		});
	}
})

.add({
	targets: lines,
	strokeDashoffset: [anime.setDashoffset, 0],
	delay: function(target, index) {
		return index * 300;
	},
	duration: 500,
	easing: 'linear',
	offset: '-=1750'
})


.add({
	targets: icons,
	translateX: [
		{ value: function(target, index) {
				return coordinates[index][0];
			},
			duration: 1 
		},
		{ value: 0, duration: 500 }
	],
	translateY: [
		{ value: function(target, index) {
				return coordinates[index][1];
			},
			duration: 1 
		},
		{ value: 0, duration: 500 }
	],
	delay: function(target, index) {
		return index * 350;
	},
	opacity: [
		{ value: 0, duration: 1 },
		{ value: 1, duration: 350 }	
	],
	easing: 'linear'
})

.add(fadeInLeftRight('#enfuce-4 #phone-right', 1000))
.add(fadeInLeftRight('#enfuce-4 #bank-right', 1000))
