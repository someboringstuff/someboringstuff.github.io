
/* SCALES ANIMATION START */

var scalesTimeline = anime.timeline({
	autoplay: true
});

scalesTimeline
.add({
	targets: '#scales-animation',
	opacity: [0, 1],
	duration: 100,
	easing: 'linear'
})

.add({
	targets: '#scales-animation #scales, #scales-animation #scale-body',
	opacity: [0, 1],
	duration: 1000,
	easing: 'linear'
})

.add({
	targets: '#scales-animation #weight-1, #scales-animation #weight-2, #scales-animation #weight-3, #scales-animation #weight-4',
	opacity: [0, 1],
	duration: 500,
	delay: function(el, index) {
		return index * 200
	},
	easing: 'linear',
	offset: 1000
})

.add({
	targets: '#scales-animation #scales',
	rotate: '10deg',
	duration: 4000,
	easing: 'easeOutElastic',
	offset: 1000
})
.add({
	targets: '#scales-animation #left-scale, #scales-animation #right-scale',
	rotate: '-10deg',
	duration: 4000,
	easing: 'easeOutElastic',
	offset: 1000
})

.add({
	targets: '#scales-animation #green-blocks, #scales-animation #yellow-blocks, #scales-animation #orange-blocks, #scales-animation #red-blocks, #scales-animation #black-blocks',
	opacity: [0, 1],
	duration: 500,
	delay: function(el, index) {
		return index * 300
	},
	easing: 'linear',
	offset: 3500
})
.add({
	targets: '#scales-animation #scales',
	rotate: '0deg',
	duration: 4000,
	easing: 'easeOutElastic',
	offset: 3500
})
.add({
	targets: '#scales-animation #left-scale, #scales-animation #right-scale',
	rotate: '0deg',
	duration: 4000,
	easing: 'easeOutElastic',
	offset: 3500
})


.add({
	targets: '#scales-animation #coloured-rectangles rect',
	width: [0, 1097.88],
	duration: 2000,
	delay: function(el, index) {
		return index * 200
	},
	easing: 'easeInOutSine',
	offset: 5500
})
.add({
	targets: '#scales-animation #coloured-words text',
	opacity: [0, 1],
	duration: 500,
	delay: function(el, index) {
		return index * 200
	},
	easing: 'easeInOutSine',
	offset: 5500
})


.add({
	targets: '#scales-animation #likelihood-mask, #scales-animation #impact-mask',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 2000,
	easing: 'easeInOutSine',
	offset: 5000
})
.add({
	targets: '#scales-animation #likelihood-text, #scales-animation #impact-text',
	opacity: [0, 1],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 5500
})

.add({
	targets: '#scales-animation #last-left line, #scales-animation #last-left #left-text',
	opacity: [0, 1],
	translateY: [50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeOutSine',
	offset: 7000
})

.add({
	targets: '#scales-animation #last-right line, #scales-animation #last-right #right-text',
	opacity: [0, 1],
	translateY: [50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeOutSine',
	offset: 7500,
	complete: function() {
		anime({
			targets: '#scales-animation #weight-1, #scales-animation #weight-2, #scales-animation #weight-3, #scales-animation #weight-4',
			scale: [
			{ value: 1, duration: 1000 },
			{ value: 1.05, duration: 300 },
			{ value: 1, duration: 300 }
			],
			delay: function(el, index) {
				return index * 200;
			},
			easing: 'easeInOutSine',
			loop: true
		});
	}
});

var weights = document.querySelectorAll("#scales-animation #weight-1, #scales-animation #weight-2, #scales-animation #weight-3, #scales-animation #weight-4"),
lines = document.querySelectorAll("#scales-animation #line-1-op, #scales-animation #line-2-op, #scales-animation #line-3-op, #scales-animation #line-4-op");


weights.forEach(function(el, index) {
	var elId = el.id;
	el.onclick = function() {
		document.querySelectorAll('#scales-modal .modal-content.' + elId + ', #scales-modal').forEach(function(content) {
			content.style.display = 'block';
		});
	}
	el.onmouseover = function() {
		document.getElementById(elId + '-fill').style.fill = '#b7c2ce';
		document.getElementById(elId + '-stroke').style.stroke = '#b7c2ce';

		for(var i = 0; i < index; i++) {
			document.getElementById(weights[i].id + '-fill').style.fill = '#F3F5F7';
			document.getElementById(weights[i].id + '-stroke').style.stroke = '#F3F5F7';
		}

		for(var i = index; i <= 4; i++) {
			if(lines[i + 1]) {
				lines[i + 1].style.opacity = '.2';
			}
		}
	}
	el.onmouseleave = function() {
		weights.forEach(function(el) {
			document.getElementById(el.id + '-fill').style.fill = '#ccd8e5';
			document.getElementById(el.id + '-stroke').style.stroke = '#ccd8e5';
		});

		lines.forEach(function(el) {
			el.style.opacity = '1';
		});
	}
});




if(document.getElementById('scales-animation')) {
	document.getElementById('criticality-hover-area').onmouseover = function() {
		document.getElementById('criticality-popup').style.opacity = '1';
		document.getElementById('criticality-popup').style.transform = 'translateY(0px)';
	}

	document.getElementById('criticality-hover-area').onmouseleave = function() {
		document.getElementById('criticality-popup').style.opacity = '0';
		document.getElementById('criticality-popup').style.transform = 'translateY(20px)';
	}

	document.getElementById('risk-hover-area').onmouseover = function() {
		document.getElementById('risk-popup').style.opacity = '1';
		document.getElementById('risk-popup').style.transform = 'translateY(0px)';
	}

	document.getElementById('risk-hover-area').onmouseleave = function() {
		document.getElementById('risk-popup').style.opacity = '0';
		document.getElementById('risk-popup').style.transform = 'translateY(20px)';
	}


}

/* SCALES ANIMATION END */

/* INFOGRAPHIC 2 ANIMATION START */

var info2Timeline = anime.timeline({
	autoplay: true
});

info2Timeline
.add({
	targets: '#info2-animation #arrow-1, #info2-animation #arrow-2, #info2-animation #arrow-3',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 500;
	},
	easing: 'easeInOutSine'
})
.add({
	targets: '#info2-animation #top-arrow-mask, #info2-animation #dashed-line-1, #info2-animation #dashed-line-2, #info2-animation #dashed-line-3',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 2000,
	easing: 'easeInOutSine',
	offset: 1500
})

.add({
	targets: '#info2-animation #title-1',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 500,
	easing: 'easeInOutSine',
	offset: 3500
})
.add({
	targets: '#info2-animation #step-1, #info2-animation #step-2, #info2-animation #step-3',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: 4000
})

.add({
	targets: '#info2-animation #title-2',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 500,
	easing: 'easeInOutSine',
	offset: 5400
})
.add({
	targets: '#info2-animation #step-4, #info2-animation #step-5, #info2-animation #step-6',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: 5900
})

.add({
	targets: '#info2-animation #title-3',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 7300
})
.add({
	targets: '#info2-animation #step-7, #info2-animation #step-8',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: 7800
})

if(document.getElementById('info2-animation')) {
	document.querySelectorAll('[id*="-fade"]').forEach(function(el) {
		el.onmouseover = function() {
			el.style.opacity = '.2';
		}
		el.onmouseleave = function() {
			el.style.opacity = '0';
		}

		el.onclick = function() {
			document.querySelectorAll('.' + el.id + ', #info2-modal').forEach(function(content) {
				content.style.display = 'block';
			});
		}
	});


}

/* INFOGRAPHIC 2 ANIMATION END */

/* INFOGRAPHIC 3 ANIMATION START */

var info3Timeline = anime.timeline({
	autoplay: true
});

info3Timeline
.add({
	targets: '#info3-animation #dash1, #info3-animation #dash2',
	opacity: [0, 1],
	duration: 500,
	easing: 'linear'
})

.add({
	targets: '#info3-animation #title-1',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 0
})
.add({
	targets: '#info3-animation #step-1-1-1, #info3-animation #step-1-1-2',
	opacity: [0, 1],
	translateY: [-20, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: 1000
})
.add({
	targets: '#info3-animation #step-1-2',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 1500
})

.add({
	targets: '#info3-animation #title-2',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 2500
})
.add({
	targets: '#info3-animation #step-1-3',
	opacity: [0, 1],
	translateY: [-20, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 3500
})
.add({
	targets: '#info3-animation #step-1-4',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 4000
})

.add({
	targets: '#info3-animation #step-2-1, #info3-animation #step-2-2',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 500;
	},
	easing: 'easeInOutSine',
	offset: 5000	
})
.add({
	targets: '#info3-animation #step-2-3, #info3-animation #step-2-4',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 500;
	},
	easing: 'easeInOutSine',
	offset: 6500	
})


.add({
	targets: '#info3-animation #step-3-1, #info3-animation #step-3-2, #info3-animation #step-3-3',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: 8000	
})
.add({
	targets: '#info3-animation #step-3-4',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 10000	
})

.add({
	targets: '#info3-animation #title-3',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 11000
})
.add({
	targets: '#info3-animation #step-4-1, #info3-animation #step-4-2',
	opacity: [0, 1],
	translateX: [-50, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: 12000
})
.add({
	targets: '#info3-animation #step-4-3',
	opacity: [0, 1],
	translateY: [20, 0],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 13500
})
.add({
	targets: '#info3-animation #step-4-4',
	opacity: [0, 1],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: 14500
})

/* INFOGRAPHIC 3 ANIMATION END */

document.querySelectorAll(".modal").forEach(function(el) {
	el.onclick = function() {
		document.querySelectorAll('.modal, .modal-content').forEach(function(content) {
			content.style.display = 'none';
		});
	}
});
