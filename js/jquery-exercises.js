

(function ($){

    "use strict";
    $(document).ready(function(){
        alert('DOM has finished loading!')
    });

    var alertParagraph = $('#container1').html();

    alert(alertParagraph);
})(jQuery);