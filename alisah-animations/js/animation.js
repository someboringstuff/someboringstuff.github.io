function randomFloatBetween(minValue,maxValue,precision){
    if(typeof(precision) == 'undefined'){
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
}

var iconAnimation1 = new TimelineMax({
	repeat: -1,
	repeatDelay: 1
});

iconAnimation1
.fromTo('#icon-1 #car', 1, {x:20, y:12, opacity:0}, {x: 0, y:0, opacity:1})
.fromTo('#icon-1 #man', .5, {x:10, y:-5, opacity:0}, {x: 0, y:0, opacity:1})
.fromTo('#icon-1 #text-bubble', 1, {rotation:'-90deg', scale: 0, opacity: 0, svgOrigin: '94px 112px'}, { rotation:'0deg', scale: 1, opacity: 1,	ease: Elastic.easeOut.config(1, 1),	svgOrigin: '94px 112px'}, 1.5)
.to('#icon-1 #right-forearm', .4, {rotation: '15deg', yoyo: true, repeat: 1, svgOrigin: '96px 143px'}, 1.5)
.to('#icon-1 #left-forearm', .4, {rotation: '-15deg', yoyo: true, repeat: 1, svgOrigin: '114px 146px'}, 1.5)
.to(['#icon-1 #car, #icon-1 #man, #icon-1 #text-bubble'], 1, { opacity: 0}, 3.5);


var iconAnimation2 = new TimelineMax({
	repeat: -1,
	repeatDelay: 1
}),
	counter = { number: 0.0 };

iconAnimation2
.fromTo('#icon-2 #phone', 1, {y: -15, opacity: 0}, {y: 0, opacity: 1, ease: Sine.easeInOut})
.to('#icon-2 #dark-screen', .7, {opacity: 0}, 1.1)
.fromTo('#icon-2 #right-arm', .5, {rotation: '-105deg', svgOrigin: '91px 115px'}, {rotation: '0deg', svgOrigin: '91px 115px', ease: Power1.easeOut}, 1.7)
.to('#icon-2 #right-arm', .15, {x: -2, y: -2, rotation: '-5deg', svgOrigin: '91px, 115px', ease: Sine.easeInOut, yoyo: true, repeat: 1}, 2.5)
.to('#icon-2 #button', .1, {scale: 1.1, svgOrigin: '71.5px, 93.5px', ease: Sine.easeInOut, yoyo: true, repeat: 1}, 2.65)
.fromTo('#icon-2 #tent-and-distance', .5, {opacity: 0}, {opacity: 1}, 2.65)
.to(counter, 2, {
      number: 2.3, 
      onUpdate: function () {
      	if(document.querySelectorAll('#icon-2 #distance')[0]) {
          document.querySelectorAll('#icon-2 #distance')[0].innerHTML = counter.number.toFixed(1);
      	}
      },
      ease:Circ.easeOut
  }, 2.65)
.to('#icon-2 #phone', 1, {opacity: 0}, 7)
.to('#icon-2 #right-arm', 1, {x: 0, y: 0, rotation: '-105deg', svgOrigin: '91px 115px', ease: Sine.easeInOut}, 3);

var iconAnimation3 = new TimelineMax({
	repeat: -1,
	repeatDelay: 1.5
});

iconAnimation3
.fromTo('#icon-3 #woman', .7, {x:7, y:-5, opacity:0}, {x: 0, y:0, opacity:1})
.fromTo('#icon-3 #text-bubble', 1, {rotation:'90deg', scale: 0, opacity: 0, svgOrigin: '146.66px 99.79px'}, {rotation:'0deg', scale: 1, opacity: 1,	ease: Elastic.easeOut.config(1, 1),	svgOrigin: '146.55px 99.79px'}, .7)
.to('#icon-3 #right-arm', .4, {rotation: '15deg', yoyo: true, repeat: 1, svgOrigin: '123.9px 150.3px'}, .7)
.to('#icon-3 #left-arm', .4, {rotation: '-15deg', yoyo: true, repeat: 1, svgOrigin: '136.5px 153.1px'}, .7)
.to('#icon-3 #tent-glow', .4, {opacity: .5, repeat: 3, yoyo: true}, 1.4)
.to(['#icon-3 #woman, #icon-3 #text-bubble'], 1, { opacity: 0}, 4.5);

TweenMax.fromTo('#icon-3 #drone', 1, {y: -55}, {y: -60, repeat: -1, yoyo: true, ease: Sine.easeInOut});

var iconAnimation4 = new TimelineMax({
	repeat: -1,
	repeatDelay: 1
});

iconAnimation4
.fromTo('#icon-4 #window', 2, {y: 4}, {y: 0, repeat: -1, yoyo: true, ease: Sine.easeInOut})
.to('#icon-4 #head', 2, {rotation: '-8deg', svgOrigin: '97.8px 124.2px', repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0)
.to('#icon-4 #right-arm', 1, {rotation: '10deg', svgOrigin: '102.2px 129.8px', repeat: -1, yoyo: true, repeatDelay: 1, ease: Sine.easeInOut}, 0)
.fromTo('#icon-4 #progress-bar', 2.5, {x: -5, y:-3}, {x: 5, y:3, repeat: -1, yoyo: true, repeatDelay: 1, ease: Sine.easeInOut}, 0);


var iconAnimation5 = new TimelineMax({
	repeat: -1,
	repeatDelay: 1
});

iconAnimation5
.fromTo('#icon-5 #woman', .7, {x:7, y:-5, opacity:0}, {x: 0, y:0, ease: Sine.easeInOut, opacity:1})
.fromTo('#icon-5 #man', .7, {x:-7, y:5, opacity:0}, {x: 0, y:0, ease: Sine.easeInOut, opacity:1})
.fromTo('#icon-5 #man .right-arm', .5, {rotation: '30deg', svgOrigin: '152px 130px'}, {rotation: '0deg', svgOrigin: '152px 130px'}, 1.8)
.fromTo('#icon-5 #woman .right-arm', .5, {rotation: '-20deg', svgOrigin: '175px 121px'}, {rotation: '0deg', svgOrigin: '175px 121px'}, 1.8)
.fromTo('#icon-5 #man .right-arm', .2, {x: 0, y: 0, svgOrigin: '152px 130px'}, {rotation: '4deg', x: .5, y: .5, repeat: 3, yoyo: true, ease: Sine.easeInOut, svgOrigin: '152px 130px'}, 2.5)
.fromTo('#icon-5 #woman .right-arm', .2, {x: 0, y: 0, svgOrigin: '175px 121px'}, {rotation: '-4deg', x: -.5, y: .5, repeat: 3, yoyo: true, ease: Sine.easeInOut, svgOrigin: '175px 121px'}, 2.5)

.fromTo('#icon-5 #text-bubble-1', 1, {rotation:'90deg', scale: 0, opacity: 0, svgOrigin: '153.79px 105.7px'}, { rotation:'0deg', scale: 1, opacity: 1,	ease: Elastic.easeOut.config(1, 1),	svgOrigin: '153.79px 105.7px'})
.to('#icon-5 #text-bubble-1', .3, {opacity: 0}, '+=.5')

.fromTo('#icon-5 #text-bubble-2', 1, {rotation:'-90deg', scale: 0, opacity: 0, svgOrigin: '171.08px 105.69px'}, { rotation:'0deg', scale: 1, opacity: 1,	ease: Elastic.easeOut.config(1, 1),	svgOrigin: '171.08px 105.69px'})
.to('#icon-5 #text-bubble-2', .3, {opacity: 0}, '+=.5')

.to('#icon-5 #man, #icon-5 #woman', 1, {opacity: 0}, '+=1')

var iconAnimation6 = new TimelineMax({
	repeat: -1,
	repeatDelay: 1
});


for (var i = 0; i < 8; i++) {
	TweenMax.to('#icon-6 #person-' + i + ' .left-arm', randomFloatBetween(0.8, 1.5, 2), {rotation: '10deg', repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0);
	TweenMax.to('#icon-6 #person-' + i + ' .right-arm', randomFloatBetween(0.8, 1.5, 2), {rotation: '-10deg', repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0);
	TweenMax.to('#icon-6 #person-' + i + ' .left-forearm', randomFloatBetween(0.8, 1.5, 2), {rotation: '-15deg', repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0)
	TweenMax.to('#icon-6 #person-' + i + ' .right-forearm', randomFloatBetween(0.8, 1.5, 2), {rotation: '15deg', repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0)
}

iconAnimation6
.fromTo('#icon-6 #floating-logo', 3, {y: -5}, {y: -12, repeat: -1, yoyo: true, ease: Sine.easeInOut})
.fromTo('#icon-6 #drone', 1.5, {y: -5}, {y: -12, repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0)
.fromTo('#icon-6 #dog-tail', 1, {rotation: '-10deg', svgOrigin: '59.56px 182.5px'}, {rotation: '0deg', svgOrigin: '59.56px 182.5px', repeat: -1, yoyo: true, ease: Sine.easeInOut}, 0)




document.querySelectorAll("#icon-6 .left-arm, #icon-6 .left-forearm").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x,
        y: bbox.y + bbox.height - 3
    };
    el.setAttribute('data-svg-origin', center.x + "px " + center.y + "px");
});

document.querySelectorAll("#icon-6 .right-arm, #icon-6 .right-forearm").forEach(function(el) {
    bbox = el.getBBox();
    center = {
        x: bbox.x + bbox.width - 5,
        y: bbox.y + bbox.height
    };
    el.setAttribute('data-svg-origin', center.x + "px " + center.y + "px");
});
