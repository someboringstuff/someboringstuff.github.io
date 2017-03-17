$(document).ready(function() {

	var s = Snap.select("#svg");
	var first = s.select("#first");
	var second = s.select("#second");
	var third = s.select("#third");
	var fourth = s.select("#fourth");
	var fifth = s.select("#fifth");


	first.attr({transform: 'T-300,100R90,0,0'});
	second.attr({transform: 'S1,.5T100,100R30,0,0'});
	third.attr({transform: 'S1,.5T150,0R30,0,0'});

	s.stop().animate({ opacity: 1}, 0, mina.easein, function() {
  first.stop().animate({ opacity: 1, transform: 'T0,0R0,0,0'}, 800, mina.easeinout,function() {
  second.stop().animate({ opacity: 1, transform: 'S1,1T0,0R0,0,0'}, 600, mina.backout, function() {
  third.stop().animate({ opacity: 1, transform: 'S1,1T0,0R0,0,0'}, 600, mina.backout, function() {
setTimeout(function(){
  fourth.stop().animate({ opacity: 1}, 800, mina.easeout, function() {
  fifth.stop().animate({ opacity: 1}, 800, mina.easeout);
  });}
,300);
  });	
  });	
  });
	});

});
