$(document).ready(function() {

    $('.carousel-inner').append('<div id="tooltip-popup"></div>');

    $('.popup').hover(function(e) {

        //getting needed attributes    

        var thisSVG = $('.active > svg').attr('id');
        var thisPath = this.id;
        var path = this;
        var tooltip=document.getElementById('tooltip-popup');

        //changing path insides, if information about it wasn't found in 'info' object

        if(info[thisSVG][thisPath] === undefined) {
            document.getElementById(thisPath).getElementsByTagName( 'polygon' )[0].style.fill = "#027696";
            var text = document.getElementById(thisPath).getElementsByTagName( 'text' )[0];
            $('#' + thisPath).children().not(':first').remove();
            $('#' + thisPath).append(text);
            document.getElementById(thisPath).getElementsByTagName( 'text' )[0].innerHTML = 'SOLD';
            document.getElementById(thisPath).getElementsByTagName( 'text' )[0].style.fill = 'white';
        }

        //if information was found - create a popup with information from 'info' object
        else {
            $('#tooltip-popup').empty();
            $('#tooltip-popup').append("<h3>"+info[thisSVG][thisPath].community+"</h3><p>Phase "+ info[thisSVG][thisPath].phase +"<br><img style='width: 80%;' src='http://jkbliving.byer.co/images/"+ info[thisSVG][thisPath].elevation +"-"+ info[thisSVG][thisPath].homeStyle +".jpg' alt='elevation' /></p><hr><p>Lot #"+ info[thisSVG][thisPath].lotNumber +"</p><hr><p>"+ info[thisSVG][thisPath].squareFeet +" square feet</p><hr><p>Home style: "+ info[thisSVG][thisPath].homeStyle +"</p><hr><p>Lot size: "+ info[thisSVG][thisPath].lotSize +"</p>");
        }

        //getting coordinates of popup


        var svgX = document.getElementById(thisSVG).getBoundingClientRect().left;
        var svgY = document.getElementById(thisSVG).getBoundingClientRect().top;

        var pathX = path.getBoundingClientRect().left;
        var pathY = path.getBoundingClientRect().top;

        var tooltipX = pathX - svgX + parseInt(window.getComputedStyle(document.getElementById(thisSVG))['margin-left']);
        var tooltipY = pathY - svgY + parseInt(window.getComputedStyle(document.getElementById(thisSVG))['margin-top']);

        var svgWidth = $('.active').width();
        var svgHeight = $('.active').height();

        var tooltipWidth = tooltip.getBoundingClientRect().width;
        var tooltipHeight = tooltip.getBoundingClientRect().height;

        var pathWidth = path.getBoundingClientRect().width;
        var pathHeight = path.getBoundingClientRect().height;

        var x = tooltipX + pathWidth * 1.05;
        var y = tooltipY - tooltipHeight/2 + pathHeight/2;

        //make sure that popup isn't getting outside the svg

        if(x + tooltipWidth > svgWidth) {
            x = tooltipX - tooltipWidth * 1.05;
        }

        if(y + tooltipHeight > svgHeight) {
            var difY = y + tooltipHeight - svgHeight;
            y = y - difY - 5;
        }

        if(y < 0) {
            var difY = -y;
            y = y + difY +5;
        }

        //position popup

        tooltip.style.top = y + 'px';
        tooltip.style.left = x + 'px';

        //make popup visible

        $('#tooltip-popup').css({opacity: '1'});

    }, function() {

        //when mouse is out - make popup invisible and remove info from it
        $('#tooltip-popup').css({opacity: '0'});
        $('#tooltip-popup').empty();
    });





});