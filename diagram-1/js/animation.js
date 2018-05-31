document.querySelectorAll("#enfuce-logo").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
});

document.querySelectorAll("circle").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width/2,
        y: bbox.y  + bbox.height/2
    };
    el.style.transformOrigin = center.x + "px " + center.y + "px";
    el.style.opacity = '0'
});

document.querySelectorAll("[id*='left']").forEach(function(el) {
	el.style.transform =  'translateX(20px)';
	el.style.opacity = '0';
});

document.querySelectorAll("[id*='right']").forEach(function(el) {
	el.style.transform =  'translateX(-20px)';
	el.style.opacity = '0';
});

document.querySelectorAll("[id*='top']").forEach(function(el) {
	el.style.transform =  'translateY(20px)';
	el.style.opacity = '0';
});

document.querySelectorAll("[id*='bottom']").forEach(function(el) {
	el.style.transform =  'translateY(-20px)';
	el.style.opacity = '0';
});




var firstDiagramAnimation = anime.timeline();

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

.add({
	targets: '#step-1-1 > g',
	translateX: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	]
})

.add({
	targets: '#step-1-2 > g',
	translateY: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	]
})

.add({
	targets: '#step-1-3 > g',
	translateX: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	],
	complete: function() {
		anime({
			targets: 'circle',
			opacity: { value: 1, duration: 1000, easing: 'linear' },
		});
		anime({
			targets: 'circle',
			rotate: '180deg',
			duration: 50000,
			easing: 'linear',
			loop: true
		});	
	}
})

//step-2-1
.add({
	targets: "[id*='step-2-1']:not([id*='arrow'])",
	translateY: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	],
	complete: function() {
		anime({
			targets: '#step-2-1-arrow',
			translateY: -5,
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})

//step-2-2
.add({
	targets: "[id*='step-2-2']:not([id*='arrow'])",
	translateX: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	],
	complete: function() {
		anime({
			targets: '#step-2-2-arrow',
			translateX: 5,
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})


//step-3 (side one)
.add({
	targets: "[id*='step-3']:not([id*='arrow'])",
	translateY: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	],
	complete: function() {
		anime({
			targets: '#step-3-arrow',
			translateY: -5,
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})

//step-2-3
.add({
	targets: "[id*='step-2-3']:not([id*='arrow'])",
	translateY: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	],
	complete: function() {
		anime({
			targets: '#step-2-3-arrow',
			translateY: 5,
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
})

//step-2-4
.add({
	targets: "[id*='step-2-4']:not([id*='arrow'])",
	translateX: [
		{ value: 0, duration: 1000, easing: 'easeOutQuart' }
	],
	opacity: [
		{ value: 1, duration: 1000, easing: 'linear'}
	],
	complete: function() {
		anime({
			targets: '#step-2-4-arrow',
			translateX: -5,
			duration: 1000,
			easing: 'linear',
			direction: 'alternate',
			loop: true
		});
	}
});
