var mainTimeline = anime.timeline();

mainTimeline
.add({
	targets: '#whole-bulb-group',
	translateY: [300, 0],
	duration: 2000,
	easing: 'easeInSine',
	complete: function() {
		anime({
			targets: '#whole-bulb-group',
			rotate: [
				{value: '-1deg', duration: 500},
				{value: '1deg', duration: 500}
			],
			translateY: {value: 10, duration: 1000},
			direction: 'alternate',
			easing: 'linear',
			loop: true		
		});
	}
})
.add({
	targets: '#steps > *',
	translateY: function(el, i) {
		return [Math.sin(anime.random(0, -Math.PI))*2000, 0];
	},
	translateX: function(el, i) {
		return [Math.cos(anime.random(0, -Math.PI))*2000, 0];
	},
	rotate: [ anime.random(-180, 180) + '1deg', 0],
	duration: 1500,
	easing: 'easeOutCirc',
	complete: function() {
		anime({
			targets: '#steps',
			translateY: {value: -10, duration: 1300},
			direction: 'alternate',
			easing: 'linear',
			loop: true
		});
	}
});

var constantAnimations = function() {
	anime({
		targets: '#fire-1, #smoke-2',
		scale: 1.3,
		rotate: '-10deg',
		duration: 100,
		loop: true,
		direction: 'alternate',
		easing: 'linear'
	});
	anime({
		targets: '#fire-2, #smoke-1',
		scale: 1.2,
		rotate: '10deg',
		duration: 100,
		loop: true,
		direction: 'alternate',
		easing: 'linear'
	});
	anime({
		targets: '#fire-3',
		scale: 1.1,
		rotate: '-5deg',
		duration: 100,
		loop: true,
		direction: 'alternate',
		easing: 'linear'
	});


	anime({
		targets: '#clouds',
		translateY: [-750, 750],
		duration: 3000,
		loop: true,
		easing: 'linear'
	});
}

constantAnimations();

document.querySelectorAll('#steps > *').forEach(function(step) {
	
	step.addEventListener('mouseenter', function() {
		anime({
			targets: step,
			scale: 1.1,
			duration: 300,
			easing: 'easeOutBack'
		});
		anime({
			targets: '#wires > *',
			stroke: '#FFDD00',
			duration: 700
		});
	});
	step.addEventListener('mouseleave', function() {
		anime({
			targets: step,
			scale: 1,
			duration: 300,
			easing: 'easeOutBack'
		});
		anime({
			targets: '#wires > *',
			stroke: '#403F41',
			duration: 700
		});
	});
});

console.log(document.querySelectorAll('#steps'));

