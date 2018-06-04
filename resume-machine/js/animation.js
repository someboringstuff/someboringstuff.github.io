function moveResume() {
	return {
		targets: "#resume-line",
		translateX: [
			{value: 0, duration: 0},
			{value: 66.761, easing: 'easeOutQuad', duration: 1000}
		]
	}
}

function movePeople(startX, finishX) {
	return {
		targets: "#main-people_1_",
		translateX: [
			{value: startX, duration: 0},
			{value: finishX, duration: 1000, easing: 'easeInOutSine'}
		],
		delay: 100
	}
}

function dropResume(type) {
	return {
		targets: "#resume-" + type,
		translateY: [
			{value: 0, duration: 0},
			{value: 150, duration: 800}
		],
		easing: [.56,.04,.84,.64]
	}
}

function turnArrow(start, finish) {
	return {
		targets: "#match-arrow",
		rotate: [
			{value: start, duration: 0},
			{value: finish}
		],
		duration: 800,
		easing: [0,.06,.38,1]
	}
}

function turnBarHandle() {
	return {
		targets: "#bar-handle",
		rotate: [
			{value: 0, duration: 0},
			{value: 60, duration: 400, easing: "linear"},
			{value: 0, duration: 400, easing: "linear"}
		]
	}
}

var lightsColors = ['#FFB933', '#E53B00', '#533465'];

var mainTimeline = anime.timeline({
	loop: true
});

var lightsTimeline = anime.timeline({
	loop: true
});

lightsTimeline
.add({
	targets: '#lights circle',
	fill: function(target) {
		return lightsColors[anime.random(0, 2)];
	},
	duration: 1000,
	loop: true
})
.add({
	targets: '#lights circle',
	fill: function(target) {
		return lightsColors[anime.random(0, 2)];
	},
	duration: 1000,
	loop: true
})
.add({
	targets: '#lights circle',
	fill: function(target) {
		return lightsColors[anime.random(0, 2)];
	},
	duration: 1000,
	loop: true
})
.add({
	targets: '#lights circle',
	fill: function(target) {
		return lightsColors[anime.random(0, 2)];
	},
	duration: 1000,
	loop: true
});

var start = 0, finish = 44;

for(var i = 0; i < 11; i++) {
	mainTimeline
	.add(moveResume())
	.add(turnArrow(0, 180))
	.add(turnBarHandle())
	.add(turnArrow(180, 0))
	.add(dropResume('good'))
	.add(movePeople(start, finish))

	.add(moveResume())
	.add(dropResume('bad'));

	start += 44;
	finish += 44;
}
