$(document).ready(function() {
    var x1,y1,x2,y2,x3,y3,x4,y4,angle1,angle2,angle3,angle4;
    var r=$('#logo-animated').attr('width')/2-1;
    angle1=Math.PI/2;
    angle2=Math.PI/2+Math.PI/4;
    angle3=Math.PI;
    angle4=Math.PI+Math.PI/4;

    var d2 = [
        "M", $('#logo-animated').attr('width')/2-1, 1, 
        "A", $('#logo-animated').attr('width')/2, $('#logo-animated').attr('width')/2-1, 1, 0, 1, $('#logo-animated').attr('width')/2-1, $('#logo-animated').attr('width')
    ].join(" ");
$('#path_an').attr('d',d2);


    $('#circle_an').attr({r:$('#logo-animated').attr('width')/2-1, cx:$('#logo-animated').attr('width')/2, cy:$('#logo-animated').attr('width')/2});

    $('#vertical1_an').attr({x1:$('#logo-animated').attr('width')/2, y1:1, x2:$('#logo-animated').attr('width')/2, y2:$('#logo-animated').attr('height')});
    $('#vertical2_an').attr({x1:$('#logo-animated').attr('width')/2, y1:1, x2:$('#logo-animated').attr('width')/2, y2:$('#logo-animated').attr('height')});
    $('#vertical3_an').attr({x1:$('#logo-animated').attr('width')/2, y1:1, x2:$('#logo-animated').attr('width')/2, y2:$('#logo-animated').attr('height')});
    $('#vertical4_an').attr({x1:$('#logo-animated').attr('width')/2, y1:1, x2:$('#logo-animated').attr('width')/2, y2:$('#logo-animated').attr('height')});

    $('#horizontal1_an').attr({x1:$('#logo-animated').attr('width')/2+1, y1:$('#logo-animated').attr('height'), x2:$('#logo-animated').attr('width')/2});
    $('#horizontal2_an').attr({x1:$('#logo-animated').attr('width')/2+1, y1:$('#logo-animated').attr('height'), x2:$('#logo-animated').attr('width')/2});
    $('#horizontal3_an').attr({x1:$('#logo-animated').attr('width')/2+1, y1:$('#logo-animated').attr('height'), x2:$('#logo-animated').attr('width')/2});
    $('#horizontal4_an').attr({x1:$('#logo-animated').attr('width')/2+1, y1:$('#logo-animated').attr('height'), x2:$('#logo-animated').attr('width')/2});

    x1=Math.cos(angle1)*(r)+1;
    y1=Math.sin(angle1)*(r)+1;
    $('#vertical1_an').attr('y2',y1+r);
    $('#vertical1_an').attr('x2',x1+r);
    $('#horizontal1_an').attr('x1',x1+r);
    $('#horizontal1_an').attr('y1',y1+r);
    $('#horizontal1_an').attr('y2',y1+r);

    x2=Math.cos(angle2)*(r)+1;
    y2=Math.sin(angle2)*(r)+1;
    $('#vertical2_an').attr('y2',y2+r);
    $('#vertical2_an').attr('x2',x2+r);
    $('#horizontal2_an').attr('x1',x2+r);
    $('#horizontal2_an').attr('y1',y2+r);
    $('#horizontal2_an').attr('y2',y2+r);

    x3=Math.cos(angle3)*(r)+1;
    y3=Math.sin(angle3)*(r)+1;
    $('#vertical3_an').attr('y2',y3+r);
    $('#vertical3_an').attr('x2',x3+r);
    $('#horizontal3_an').attr('x1',x3+r);
    $('#horizontal3_an').attr('y1',y3+r);
    $('#horizontal3_an').attr('y2',y3+r);

    x4=Math.cos(angle4)*(r);
    y4=Math.sin(angle4)*(r);
    $('#vertical4_an').attr('y2',y4+r);
    $('#vertical4_an').attr('x2',x4+r);
    $('#horizontal4_an').attr('x1',x4+r);
    $('#horizontal4_an').attr('y1',y4+r);
    $('#horizontal4_an').attr('y2',y4+r);


    setInterval(function() {


        if(angle1<3*Math.PI/2)
        {   
           x1=Math.cos(angle1)*(r)+1;
           y1=Math.sin(angle1)*(r)+1;
           $('#vertical1_an').attr('y2',y1+r);
           $('#vertical1_an').attr('x2',x1+r);
           $('#horizontal1_an').attr('x1',x1+r);
           $('#horizontal1_an').attr('y1',y1+r);
           $('#horizontal1_an').attr('y2',y1+r);
       }
       else {
           angle1=Math.PI/2;
           x1=r;
           y1=2*r;    
       }
       angle1+=0.005;


       if(angle2<3*Math.PI/2)
       {    
           x2=Math.cos(angle2)*(r)+1;
           y2=Math.sin(angle2)*(r)+1;
           $('#vertical2_an').attr('y2',y2+r);
           $('#vertical2_an').attr('x2',x2+r);
           $('#horizontal2_an').attr('x1',x2+r);
           $('#horizontal2_an').attr('y1',y2+r);
           $('#horizontal2_an').attr('y2',y2+r);
       }
       else {
           angle2=Math.PI/2;
           x2=r;
           y2=2*r;    
       }
       angle2+=0.005;


       if(angle3<3*Math.PI/2)
       {    
           x3=Math.cos(angle3)*(r)+1;
           y3=Math.sin(angle3)*(r)+1;
           $('#vertical3_an').attr('y2',y3+r);
           $('#vertical3_an').attr('x2',x3+r);
           $('#horizontal3_an').attr('x1',x3+r);
           $('#horizontal3_an').attr('y1',y3+r);
           $('#horizontal3_an').attr('y2',y3+r);
       }
       else {
           angle3=Math.PI/2;
           x3=r;
           y3=2*r;    
       }
       angle3+=0.005;


       if(angle4<3*Math.PI/2)
       {    
           x4=Math.cos(angle4)*(r)+1;
           y4=Math.sin(angle4)*(r)+1;
           $('#vertical4_an').attr('y2',y4+r);
           $('#vertical4_an').attr('x2',x4+r);
           $('#horizontal4_an').attr('x1',x4+r);
           $('#horizontal4_an').attr('y1',y4+r);
           $('#horizontal4_an').attr('y2',y4+r);
       }
       else {
           angle4=Math.PI/2;
           x4=r;
           y4=2*r;    
       }
       angle4+=0.005;

   },9);

});
