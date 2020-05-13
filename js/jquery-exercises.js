

(function ($){
    "use strict";

    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background-color', '#FFFF00');
    // alert($('h1').html());
    $('h1').click(function(){
        $(this).css('background-color', 'blue');
    });
    $('p').dblclick(function(){
        $(this).css('font-size', '18px');
    });
    $('li').hover(function() {
        $(this).css('color', 'red');
    },
        function () {
        $(this).css('color', 'black');

    });
})(jQuery);