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