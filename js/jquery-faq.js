"user strict";


$(document).ready(function(){
    $('#show-dd').click(function (e) {
        e.preventDefault();
        $('dd').toggleClass('invisible')
    })
});

$('dt').click(function(){
    $(this).toggleClass('highlight')
});

$('#highlight').click(function(){
    $('ul').each(function(){
        $(this).children().last().css('background-color', 'yellow')
    });
});

$('h3').click(function(){
    $(this).each(function(){
        $(this).next().css('font-weight', 'bold')
    });
});

$('li').click(function(){
    $(this).each(function(){
        $(this).parent().children().first().css('color', 'blue')
    });
});