$(document).ready(function() {


	
	var x1,y1,x2,y2,x3,y3,x4,y4,angle1,angle2,angle3,angle4;
	var r=$('#do-logo').attr('width')/2-1;
	angle1=Math.PI/2;
	angle2=Math.PI/2+Math.PI/4;
	angle3=Math.PI;
	angle4=Math.PI+Math.PI/4;

	var d = [
        "M", $('#do-logo').attr('width')/2-1, 1, 
        "A", $('#do-logo').attr('width')/2, $('#do-logo').attr('width')/2-1, 1, 0, 1, $('#do-logo').attr('width')/2, $('#do-logo').attr('width')-1
    ].join(" ");
$('#half-circle-onscroll').attr('d',d);

	$('#circle-onscroll').attr({r:$('#do-logo').attr('width')/2-1, cx:$('#do-logo').attr('width')/2, cy:$('#do-logo').attr('width')/2});

	$('#vertical1').attr({x1:$('#do-logo').attr('width')/2, y1:1, x2:$('#do-logo').attr('width')/2, y2:$('#do-logo').attr('height')});
	$('#vertical2').attr({x1:$('#do-logo').attr('width')/2, y1:1, x2:$('#do-logo').attr('width')/2, y2:$('#do-logo').attr('height')});
	$('#vertical3').attr({x1:$('#do-logo').attr('width')/2, y1:1, x2:$('#do-logo').attr('width')/2, y2:$('#do-logo').attr('height')});
	$('#vertical4').attr({x1:$('#do-logo').attr('width')/2, y1:1, x2:$('#do-logo').attr('width')/2, y2:$('#do-logo').attr('height')});


	$('#horizontal1').attr({x1:$('#do-logo').attr('width')/2+1, y1:$('#do-logo').attr('height'), x2:$('#do-logo').attr('width')/2});
	$('#horizontal2').attr({x1:$('#do-logo').attr('width')/2+1, y1:$('#do-logo').attr('height'), x2:$('#do-logo').attr('width')/2});
	$('#horizontal3').attr({x1:$('#do-logo').attr('width')/2+1, y1:$('#do-logo').attr('height'), x2:$('#do-logo').attr('width')/2});
	$('#horizontal4').attr({x1:$('#do-logo').attr('width')/2+1, y1:$('#do-logo').attr('height'), x2:$('#do-logo').attr('width')/2});

	x1=Math.cos(angle1)*(r)+1;
	y1=Math.sin(angle1)*(r)+1;
	$('#vertical1').attr('y2',y1+r);
	$('#vertical1').attr('x2',x1+r);
	$('#horizontal1').attr('x1',x1+r);
	$('#horizontal1').attr('y1',y1+r);
	$('#horizontal1').attr('y2',y1+r);

	x2=Math.cos(angle2)*(r)+1;
	y2=Math.sin(angle2)*(r)+1;
	$('#vertical2').attr('y2',y2+r);
	$('#vertical2').attr('x2',x2+r);
	$('#horizontal2').attr('x1',x2+r);
	$('#horizontal2').attr('y1',y2+r);
	$('#horizontal2').attr('y2',y2+r);

	x3=Math.cos(angle3)*(r)+1;
	y3=Math.sin(angle3)*(r)+1;
	$('#vertical3').attr('y2',y3+r);
	$('#vertical3').attr('x2',x3+r);
	$('#horizontal3').attr('x1',x3+r);
	$('#horizontal3').attr('y1',y3+r);
	$('#horizontal3').attr('y2',y3+r);

	x4=Math.cos(angle4)*(r)+1;
	y4=Math.sin(angle4)*(r)+1;
	$('#vertical4').attr('y2',y4+r);
	$('#vertical4').attr('x2',x4+r);
	$('#horizontal4').attr('x1',x4+r);
	$('#horizontal4').attr('y1',y4+r);
	$('#horizontal4').attr('y2',y4+r);


	

	var lastScrollTop = 0;

	window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       // downscroll code
       if(angle1<3*Math.PI/2)
		{		
			x1=Math.cos(angle1)*(r)+1;
			y1=Math.sin(angle1)*(r)+1;
			$('#vertical1').attr('y2',y1+r);
			$('#vertical1').attr('x2',x1+r);
			$('#horizontal1').attr('x1',x1+r);
			$('#horizontal1').attr('y1',y1+r);
			$('#horizontal1').attr('y2',y1+r);
		}
		else {
			angle1=Math.PI/2;
			x1=r;
			y1=2*r;  	
		}
		angle1+=0.015;


		if(angle2<3*Math.PI/2)
		{		
			x2=Math.cos(angle2)*(r)+1;
			y2=Math.sin(angle2)*(r)+1;
			$('#vertical2').attr('y2',y2+r);
			$('#vertical2').attr('x2',x2+r);
			$('#horizontal2').attr('x1',x2+r);
			$('#horizontal2').attr('y1',y2+r);
			$('#horizontal2').attr('y2',y2+r);
		}
		else {
			angle2=Math.PI/2;
			x2=r;
			y2=2*r;  	
		}
		angle2+=0.015;


		if(angle3<3*Math.PI/2)
		{		
			x3=Math.cos(angle3)*(r)+1;
			y3=Math.sin(angle3)*(r)+1;
			$('#vertical3').attr('y2',y3+r);
			$('#vertical3').attr('x2',x3+r);
			$('#horizontal3').attr('x1',x3+r);
			$('#horizontal3').attr('y1',y3+r);
			$('#horizontal3').attr('y2',y3+r);
		}
		else {
			angle3=Math.PI/2;
			x3=r;
			y3=2*r;  	
		}
		angle3+=0.015;


		if(angle4<3*Math.PI/2)
		{		
			x4=Math.cos(angle4)*(r)+1;
			y4=Math.sin(angle4)*(r)+1;
			$('#vertical4').attr('y2',y4+r);
			$('#vertical4').attr('x2',x4+r);
			$('#horizontal4').attr('x1',x4+r);
			$('#horizontal4').attr('y1',y4+r);
			$('#horizontal4').attr('y2',y4+r);
		}
		else {
			angle4=Math.PI/2;
			x4=r;
			y4=2*r;  	
		}
		angle4+=0.015;
   } 

  

   else {
      // upscroll code
      if(angle1>Math.PI/2)
		{		
			x1=Math.cos(angle1)*(r)+1;
			y1=Math.sin(angle1)*(r)+1;
			$('#vertical1').attr('y2',y1+r);
			$('#vertical1').attr('x2',x1+r);
			$('#horizontal1').attr('x1',x1+r);
			$('#horizontal1').attr('y1',y1+r);
			$('#horizontal1').attr('y2',y1+r);
		}
		else {
			angle1=3*Math.PI/2;
			x1=r;
			y1=1;
		}
		angle1-=0.015;


		if(angle2>Math.PI/2)
		{		
			x2=Math.cos(angle2)*(r)+1;
			y2=Math.sin(angle2)*(r)+1;
			$('#vertical2').attr('y2',y2+r);
			$('#vertical2').attr('x2',x2+r);
			$('#horizontal2').attr('x1',x2+r);
			$('#horizontal2').attr('y1',y2+r);
			$('#horizontal2').attr('y2',y2+r);
		}
		else {
			angle2=3*Math.PI/2;
			x2=r;
			y2=1;
		}
		angle2-=0.015;


		if(angle3>Math.PI/2)
		{		
			x3=Math.cos(angle3)*(r)+1;
			y3=Math.sin(angle3)*(r)+1;
			$('#vertical3').attr('y2',y3+r);
			$('#vertical3').attr('x2',x3+r);
			$('#horizontal3').attr('x1',x3+r);
			$('#horizontal3').attr('y1',y3+r);
			$('#horizontal3').attr('y2',y3+r);
		}
		else {
			angle3=3*Math.PI/2;
			x3=r;
			y3=1; 
		}
		angle3-=0.015;


		if(angle4>Math.PI/2)
		{		
			x4=Math.cos(angle4)*(r)+1;
			y4=Math.sin(angle4)*(r)+1;
			$('#vertical4').attr('y2',y4+r);
			$('#vertical4').attr('x2',x4+r);
			$('#horizontal4').attr('x1',x4+r);
			$('#horizontal4').attr('y1',y4+r);
			$('#horizontal4').attr('y2',y4+r);
		}
		else {
			angle4=3*Math.PI/2;
			x4=r;
			y4=1;
		}
		angle4-=0.015;
   }
   lastScrollTop = st;
}, false);



});