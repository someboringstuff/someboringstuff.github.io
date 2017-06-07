var s = Snap.select('svg');
var hammer = s.select('#hammer');
var hammerbbox = hammer.getBBox();

var screwdriver = s.select('#screwdriver');
var screwdriverbbox = screwdriver.getBBox();



var lastScrollTop = 0,
    painterpx = 0,
    wrenchX = 0,
    wrenchY = 0,
    hammerangle = 0,
    hammerloop = false,
    screwdriverangle = 0,
    screwdriverloop = false,
    wrenchloop = false,
    painterloop = false;


window.addEventListener("scroll", function(){


    if(painterpx > 37) {
        painterloop = false;            
    }
    if(painterpx < 0) {
        painterloop = true;
    }
    
    if(wrenchX > 7) {
        wrenchloop = false;
    }
    if(wrenchX < 0) {
        wrenchloop = true;
    }
    
    
    if(hammerangle > 10) {
        hammerloop = true;
    }
    if(hammerangle < -10) {
        hammerloop = false;
    }
    
    if(hammerloop == true) {
        hammerangle -= 0.5;
    }
    else {
        hammerangle += 0.5;
    }
    
    hammer.animate({transform: "r"+hammerangle+"," + hammerbbox.cx + "," + hammerbbox.cy }, 5);
    
    if(screwdriverangle > 5) {
        screwdriverloop = true;
    }
    if(screwdriverangle < -5) {
        screwdriverloop = false;
    }
    
    if(screwdriverloop == true) {
        screwdriverangle -= 0.5;
    }
    else {
        screwdriverangle += 0.5;
    }
    
    screwdriver.animate({transform: "r"+screwdriverangle+"," + screwdriverbbox.cx + "," + screwdriverbbox.cy }, 5);
    
    $('#move_this_wrench').css('transform', 'translate('+ wrenchX +'px,-'+ wrenchY +'px)');
    $('#painter').css('transform', 'translateY(-'+ painterpx +'px)');
    
    
    
    
    if(wrenchloop == true) {
        wrenchX += 0.3;
        wrenchY += 0.1;
    }
    else {
        wrenchX -= 0.3;
        wrenchY -= 0.1;
    }

    if(painterloop == true) {  
        painterpx += 1;
    } 
    else {
        painterpx -= 1;
    }
    
    
    
    


}, false);