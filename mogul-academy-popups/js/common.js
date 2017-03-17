$(document).ready(function() {

$('[data-popup]').hover(function() {
    $(this).fadeTo(1,1);
    $('.popup').css('background-color', 'rgba(0,0,0,0.3)');
},function() {
    $(this).fadeTo(1,0);
    $('.popup').css('background-color', 'rgba(0,0,0,0.0)');
});

});
