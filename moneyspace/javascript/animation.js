
//HEADER IMAGE ANIMATION START

anime({
	targets: '#header-image #satellite',
	rotate: [
		{ value: 10, duration: 1000 },
		{ value: -10, duration: 2000, delay: 500 },
		{ value: 0, duration: 1000, delay: 500 },
		{ value: 0, duration: 2000 }
	],
	easing: "easeInOutQuad",
	loop: true
});

anime({
	targets: '#header-image #stars-1 *',
	opacity: [
		{ value: 0, duration: 2000 },
		{ value: 1, duration: 2000 }
	],
	delay: function() {
		return anime.random(500, 1500);
	},
	easing: 'linear',
	loop: true
});

anime({
	targets: '#header-image #stars-2 *',
	opacity: [
		{ value: 0, duration: 2000 },
		{ value: 1, duration: 2000 }
	],
	delay: function() {
		return anime.random(0, 1000);
	},
	easing: 'linear',
	loop: true
});

anime({
	targets: '#header-image #stars-3 *',
	opacity: [
		{ value: 0, duration: 2000 },
		{ value: 1, duration: 2000 }
	],
	delay: function() {
		return anime.random(500, 1500);
	},
	easing: 'linear',
	loop: true
});

anime({
	targets: '#header-image #vehicle',
	scaleY: [1, 1.01],
	duration: 150,
	easing: "easeInOutSine",
	direction: 'alternate',
	loop: true
});


var transfer = anime.timeline({
	loop: true
});

transfer
.add({
	targets: '#header-image #left-hand',
	rotate: [
		{ value: 80, duration: 1000 },
		{ value: 60, duration: 500 },
		{ value: 80, duration: 500 },
		{ value: 60, duration: 500 },
		{ value: 0, duration: 1000 },
		{ value: 0, duration: 2000 }
	],
	easing: "easeInOutSine"
})
.add({
	targets: '#header-image #right-hand',
	rotate: [
		{ value: -10, duration: 2000 },
		{ value: 0, duration: 1500 },
		{ value: 0, duration: 2000 }
	],
	duration: 1000,
	easing: "easeInOutSine",
	offset: '-=5500'
})
.add({
	targets: '#header-image #credit-card',
	translateX: [
		{ value: -150, duration: 1000 },
		{ value: -300, duration: 1000 },
	],
	translateY: [
		{ value: -100, duration: 1000 },
		{ value: -50, duration: 1000 },
	],
	scale: [
		{ value: 7, duration: 1000 },
		{ value: 1, duration: 1000 }
	],
	opacity: [{ value: 0, delay: 2000 }],
	easing: "easeInOutSine",
	offset: '-=5500'
})
.add({
	targets: '#header-image #rocket',
	translateY: [
		{ value: -300, duration: 4000 },
		{ value: -300, duration: 1000 },
		{ value: 0, duration: 4000 },
		{ value: 0, duration: 3000 }
	],
	opacity: [
		{ value: 1, duration: 2000 },
		{ value: 0, duration: 2000 },
		{ value: 0, duration: 1000 },
		{ value: 1, duration: 2000 },
		{ value: 1, duration: 5000 }
	],
	scale: [
		{ value: 1, duration: 2000 },
		{ value: 0.5, duration: 2000 },
		{ value: 0.5, duration: 1000 },
		{ value: 1, duration: 3000 },
		{ value: 1, duration: 4000 }	
	],
	offset: '-=3500',
	easing: 'easeInSine'
})
.add({
	targets: '#header-image #rocket-shadow',
	translateX: [
		{ value: 0, duration: 2000 },
		{ value: 300, duration: 4000 },
		{ value: 300, duration: 1000 },
		{ value: 0, duration: 4000 },
		{ value: 0, duration: 3000 },
	],
	opacity: [
		{ value: 1, duration: 2000 },
		{ value: 1, duration: 2000 },
		{ value: 0, duration: 2000 },
		{ value: 0, duration: 1000 },
		{ value: 1, duration: 2000 },
		{ value: 1, duration: 5000 }
	],
	scaleX: [
		{ value: 1, duration: 2000 },
		{ value: 0.9, duration: 2000 },
		{ value: 0.5, duration: 2000 },
		{ value: 0.5, duration: 1000 },
		{ value: 0.9, duration: 2000 },
		{ value: 1, duration: 2000 },
		{ value: 1, duration: 3000 },

	],
	offset: '-=14000',
	easing: "easeInSine"
})
.add({
	targets: '#header-image #vehicle-group',
	translateX: [
		{ value: -280, duration: 2000 },
		{ value: -900, duration: 3500, delay: 1000 },
		{ value: [500, 0], duration: 3500, delay: 1000 }
	],
	opacity: [
		{ value: 0, duration: 200, delay: 6000 },
		{ value: 1, duration: 200, delay: 3000 },
	],
	offset: '-=3000',
	easing: 'linear'
})
.add({
	targets: '#header-image #coin',
	translateX: [
		{ value: 100, duration: 700 },
		{ value: 150, duration: 700 },
	],
	translateY: [
		{ value: -50, duration: 700 },
		{ value: 30, duration: 700 },
	],
	scale: [
		{ value: 7, duration: 700 },
		{ value: 1, duration: 700 }
	],
	opacity: [
		{ value: [0, 1], duration: 200 },
		{ value: 0, duration: 200, delay: 1000 }
	],
	offset: '-=9500',
	easing: 'easeInOutSine'
});

//HEADER IMAGE ANIMATION END

//PAYMENT GATEWAY ANIMATION START

var pGateway = anime.timeline({
	loop: true
});

pGateway
.add({
	targets: '#payment-gateway #shopping-cart',
	translateX: [-100, 0],
	translateY: [-50, 0],
	opacity: [0, 1],
	duration: 1000,
	delay: 1000,
	easing: 'easeInOutSine'
})
.add({
	targets: ['#payment-gateway #credit-card', '#payment-gateway #profile-info'],
	translateX: [-50, 0],
	translateY: [30, 0],
	opacity: [0, 1],
	duration: 500,
	easing: 'easeInOutSine',
	delay: function(el, index) {
		return index * 100;
	}
})
.add({
	targets: '#payment-gateway #not-top',
	translateY: [54, 39],
	opacity: [0, 1],
	scale: [.5, 1],
	duration: 500,
	easing: 'easeInOutSine'
})
.add({
	targets: '#payment-gateway #not-top',
	translateY: [39, 0],
	duration: 500,
	easing: 'easeInOutSine'
})
.add({
	targets: '#payment-gateway #not-bottom',
	translateY: [15, 0],
	opacity: [0, 1],
	scale: [.5, 1],
	duration: 500,
	offset: '-=500',
	easing: 'easeInOutSine'
})
.add({
	targets: '#payment-gateway #cb-left',
	rotate: [-30, 0],
	opacity: [0, .46],
	scale: [.5, 1],
	duration: 500,
	easing: 'easeInOutSine'
})
.add({
	targets: '#payment-gateway #cb-right',
	rotate: [30, 0],
	opacity: [0, .46],
	scale: [.5, 1],
	duration: 500,
	easing: 'easeInOutSine'
})
.add({
	targets: ['#payment-gateway #icon-1', '#payment-gateway #icon-2', '#payment-gateway #icon-3', '#payment-gateway #icon-4'],
 	translateY: [-10, 0],
 	opacity: [0, 1],
 	duration: 500,
 	easing: 'easeInOutSine',
 	delay: function(el, index) {
		return index * 200;
	}
})
.add({
	targets: ['#payment-gateway #arrow-1', '#payment-gateway #arrow-2', '#payment-gateway #arrow-3'],
 	opacity: [
 		{ value: [0, 1], duration: 500 },
 		{ value: 1, duration: 400 }
 	],
 	easing: 'easeInOutSine',
 	delay: function(el, index) {
		return index * 400;
	},
	offset: '-=900'
})
.add({
	targets: ['#payment-gateway #check-1', '#payment-gateway #check-2', '#payment-gateway #check-3'],
	translateX: [-10, 0],
	translateY: [5, 0],
	opacity: [0, 1],
	duration: 500,
	delay: function(el, index) {
		return index * 200;
	},
	offset: '-=800',
	easing: 'easeInOutSine'
})
.add({
	targets: '#payment-gateway #shopping-cart',
	translateX: [0, 100],
	translateY: [0, 50],
	opacity: [1, 0],
	duration: 1000,
	easing: 'easeInOutSine'
})
.add({
	targets: ['#payment-gateway #shopping-cart', '#payment-gateway #credit-card', '#payment-gateway #profile-info', '#payment-gateway #not-top', '#payment-gateway #not-bottom', '#payment-gateway #icons', '#payment-gateway #arrows', '#payment-gateway #check', '#payment-gateway #cb-left', '#payment-gateway #cb-right'],
	opacity: 0,
	duration: 1000,
	easing: 'linear'
});

//PAYMENT GATEWAY ANIMATION END

//PAYMENT LINK ANIMATION START

anime({
	targets: ['#payment-link #cube-1', '#payment-link #cube-2', '#payment-link #cube-3'],
	translateY: [
		{ value: 25, duration: 2000 },
		{ value: 0, duration: 2000 }
	],
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutQuad',
	loop: true
});

anime({
	targets: ['#payment-link #lightcube-1', '#payment-link #lightcube-2', '#payment-link #lightcube-3'],
	translateY: [
		{ value: 20, duration: 2500 },
		{ value: 0, duration: 2500 }
	],
	delay: function(el, index) {
		return index * 500;
	},
	easing: 'easeInOutQuad',
	loop: true
});

anime({
	targets: ['#payment-link #cube-1-2', '#payment-link #cube-2-2', '#payment-link #cube-3-2'],
	translateY: [
		{ value: 15, duration: 2000 },
		{ value: 0, duration: 2000 }
	],
	delay: function(el, index) {
		return index * 300;
	},
	easing: 'easeInOutQuad',
	loop: true
});

anime({
	targets: ['#payment-link #circle-1', '#payment-link #circle-2'],
	translateY: [
		{ value: 25, duration: 3000 },
		{ value: 0, duration: 3000 }
	],
	scale: [
		{ value: 1.05, duration: 3000 },
		{ value: 1, duration: 3000 }	
	],
	delay: function(el, index) {
		return index * 500;
	},
	easing: 'easeInOutQuad',
	loop: true
});

anime({
	targets: ['#payment-link #chain-link'],
	translateY: [
		{ value: -15, duration: 3000 },
		{ value: 0, duration: 3000 }
	],
	rotate: [
		{ value: 180, duration: 6000 }
	],
	easing: 'easeInOutQuad',
	loop: true
});

anime({
	targets: ['#payment-link #lights-1 *', '#payment-link #lights-2 *', '#payment-link #lights-3 *'],
	translateY: [
		{ value: 10, duration: 3000, delay: function(el, index) {return anime.random(0, 500)} },
		{ value: 0, duration: 3000 }
	],
	easing: 'linear',
	loop: true
});

//PAYMENT LINK ANIMATION END

//OFFLINE PAYMENT ANIMATION START

var offlinePayment = anime.timeline({
	loop: true
});

offlinePayment
.add({
	targets: '#offline-payment #woman',
	translateX: [50, 0],
	translateY: [30, 0],
	opacity: [0, 1],
	duration: 1000,
	delay: 1000,
	easing: 'easeInOutSine'
})
.add({
	targets: '#offline-payment #dark-screen',
	opacity: [
		{ value: .5, duration: 1 },
		{ value: 0, duration: 1, delay: 100 },
		{ value: .5, duration: 1, delay: 200 },
		{ value: 0, duration: 1, delay: 100 },
		{ value: .5, duration: 1, delay: 100 },
		{ value: 0, duration: 1, delay: 100 },
		{ value: .5, duration: 1, delay: 200 },
		{ value: 0, duration: 1, delay: 300 }
	],
	easing: 'linear'
})
.add({
	targets: '#offline-payment #light-shadow',
	opacity: [
		{ value: 0, duration: 1 },
		{ value: 1, duration: 1, delay: 100 },
		{ value: 0, duration: 1, delay: 200 },
		{ value: 1, duration: 1, delay: 100 },
		{ value: 0, duration: 1, delay: 100 },
		{ value: 1, duration: 1, delay: 100 },
		{ value: 0, duration: 1, delay: 200 },
		{ value: 1, duration: 1, delay: 300 }
	],
	easing: 'linear',
	offset: '-=1108'
})
.add({
	targets: ['#offline-payment #top-bag', '#offline-payment #bottom-bag'],
	translateY: [-20, 0],
	opacity: [0, 1],
	duration: 1000,
	easing: 'easeInOutSine',
	delay: function(el, index) {
		return index * 200;
	}
})
.add({
	targets: '#offline-payment #boot',
	translateY: [-20, 0],
	opacity: [0, 1],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: '-=800'
})
.add({
	targets: '#offline-payment #interface',
	translateY: [30, 0],
	opacity: [0, 1],
	duration: 1000,
	easing: 'easeInOutSine',
	offset: '-=300'
})
.add({
	targets: ['#offline-payment #top-line', '#offline-payment #bottom-line', '#offline-payment #memo'],
	translateX: [-15, 0],
	translateY: [10, 0],
	opacity: [0, 1],
	duration: 500,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeInOutSine',
	offset: '-=500'
})
.add({
	targets: document.querySelectorAll('#offline-payment stars *'),
	opacity: [0, 1],
	duration: 300,
	delay: function(el, index) {
		return index * 100;
	},
	easing: 'easeInOutSine'
})
.add({
	targets: ['#offline-payment #woman', '#offline-payment #interface', '#offline-payment #boot', '#offline-payment #top-bag', '#offline-payment #bottom-bag', '#offline-payment #light-shadow'],
	opacity: 0,
	duration: 1000,
	delay: 500,
	easing: 'linear'
})
.add({
	targets: '#offline-payment #dark-screen',
	opacity: .5,
	duration: 1000,
	delay: 500,
	offset: '-=1500',
	easing: 'linear'
});

//OFFLINE PAYMENT ANIMATION END

//BIRD ICON ANIMATION START

var birdIcon = anime.timeline({
	loop: true
});

birdIcon
.add({
	targets: '#bird-icon #bird',
	opacity: [0, 1],
	scale: [.5, 1],
	duration: 1000,
	delay: 500,
	easing: 'easeOutElastic',
	elasticity: 200
})
.add({
	targets: '#bird-icon #bird',
	scale: [1, 1.1, 1],
	duration: 1000,
	delay: 500,
	easing: 'easeOutSine',
	elasticity: 200	
})
.add({
	targets: '#bird-icon #bird',
	scale: 0,
	opacity: 0,
	duration: 500,
	delay: 1000,
	easing: 'linear',
});

//BIRD ICON ANIMATION END

//CREDITCARD ICON ANIMATION START

var creditcardIcon = anime.timeline({
	loop: true
});

creditcardIcon
.add({
	targets: '#creditcard-icon #credit-card',
	translateX: [-50, 0],
	translateY: [30, 0],
	duration: 1000,
	delay: 500,
	easing: 'easeOutElastic',
	elasticity: 200
})
.add({
	targets: ['#creditcard-icon #star-1', '#creditcard-icon #star-2'],
	translateY: [-40, 0],
	duration: 1000,
	delay: function(el, index) {
		return index * 200;
	},
	easing: 'easeOutElastic',
	elasticity: 200,
	offset: '-=500'
})
.add({
	targets: '#creditcard-icon #credit-card',
	translateX: [0, 100],
	translateY: [0, -60],
	duration: 1000,
	delay: 500,
	easing: 'easeInSine',
	elasticity: 200
})
.add({
	targets: '#creditcard-icon #clip',
	fill: '#000',
	duration: 500,
	easing: 'linear',
	offset: '-=500'
});

//CREDITCARD ICON ANIMATION END

//HISTOGRAM ICON ANIMATION START

var histogramIcon = anime.timeline({
	loop: true
});

histogramIcon
.add({
	targets: ['#histogram-icon #block-1', '#histogram-icon #block-2', '#histogram-icon #block-3', '#histogram-icon #block-4'],
	translateY: [-70, 0],
	duration: 500,
	delay: function(el, index) {
		return index * 400;
	},
	easing: 'easeOutSine'
})
.add({
	targets: '#histogram-icon #arrow',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 1000,
	easing: 'easeInOutSine'
})
.add({
	targets: '#histogram-icon #clip',
	fill: '#000000',
	duration: 500,
	delay: 1000,
	easing: 'linear',
})

//HISTOGRAM ICON ANIMATION END

//MONEY ICON ANIMATION START

var moneyIcon = anime.timeline({
	loop: true
});

moneyIcon
.add({
	targets: ['#money-icon #coin-1-1', '#money-icon #coin-1-2', '#money-icon #coin-1-3', '#money-icon #coin-1-4', '#money-icon #coin-1-5', '#money-icon #coin-1-6'],
	translateY: [-70, 0],
	easing: 'easeInSine',
	duration: 500,
	delay: function(el, index) {
		return index * 50;
	}
})
.add({
	targets: ['#money-icon #coin-2-1', '#money-icon #coin-2-2'],
	translateY: [-60, 0],
	easing: 'easeInSine',
	duration: 500,
	delay: function(el, index) {
		return index * 50;
	},
	offset: '-=300'
})
.add({
	targets: '#money-icon #dollar-bill',
	translateY: [-70, 0],
	easing: 'easeOutSine',
	duration: 500
})
.add({
	targets: '#money-icon #clip',
	fill: '#000000',
	duration: 500,
	delay: 1000,
	easing: 'linear'
});

//MONEY ICON ANIMATION END

//SHIELDLOCK ICON ANIMATION START

var shieldlockIcon = anime.timeline({
	loop: true
});

shieldlockIcon
.add({
	targets: '#shieldlock-icon #shield',
	opacity: [0, 1],
	scale: [.5, 1],
	duration: 1000,
	delay: 500,
	easing: 'easeOutElastic',
	elasticity: 200
})
.add({
	targets: '#shieldlock-icon #shine',
	translateX: [-50, 50],
	translateY: [50, -50],
	duration: 1500,
	easing: 'easeInOutSine',
	offset: '-=500'
})
.add({
	targets: '#shieldlock-icon #clip',
	fill: '#000000',
	duration: 500,
	delay: 1000,
	easing: 'linear',
});

//SHIELDLOCK ICON ANIMATION END

//SHOPBAG ICON ANIMATION START

shopbagIcon = anime.timeline({
	loop: true
});

shopbagIcon
.add({
	targets: '#shopbag-icon #shopbag',
	translateX: [
		{ value: [-60, 0], easing: 'easeInOutSine', duration: 300, delay: 1000 }
	],
	skewX: [
		{ value: [10, -10], easing: 'easeInOutSine', duration: 200, delay: 1200 },
		{ value: [-10, 0], easing: 'easeOutElastic', duration: 500 }
	],
	duration: 1000,
	easing: 'easeOutElastic'
})
.add({
	targets: '#shopbag-icon #clip',
	fill: '#000000',
	easing: 'linear',
	duration: 500,
	delay: 1000
});

//SHOPBAG ICON ANIMATION END