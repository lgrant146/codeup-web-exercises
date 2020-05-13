"use strict";
    // var konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    // var started = false;
    //  var count = 0;
    //  var reset = function (){
    //      started = false;
    //      count = 0;
    //      return;
    //  };
    // $(document).keyup(function(e) {
    //  var key = e.keyCode;
    //     console.log(e.keyCode);
    //     if(!started){
    //         if(key == 38){
    //             started = true;
    //         }
    //     }
    //     if (started) {
    //         if (konamiKeys[count] == key) {
    //             count++;
    //         } else {
    //             reset();
    //         }
    //         if (count == 10) {
    //             alert('Konami code entered');
    //             reset();
    //         } else {
    //             reset();
    //         }
    //
    //     }
    //
    // });
// function onKonamiCode(cb) {
//     var input = '';
//     var key = '3838404037393739666513';
//     $(document).keyup(function(e) {
//         console.log(e.keyCode);
//         input += ("" + e.keyCode);
//         if (input === key) {
//             return cb();
//         }
//         if (!key.indexOf(input)) return;
//
//         input = ("" + e.keyCode);
//     });
// }
//
// onKonamiCode(function () {alert('konami code activated')});
// a key map of allowed keys
//     $(document).addEventListener('keydown', function(e) {
//         if (e.keyCode == 72) {
//             $('#h').play();
//         }
//     });
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 72) {
        document.getElementById('h').play();
    }
});
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'start'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'start'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
$(document).keyup(function (e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    $('body').css({
        'background-image':"url(img/ocarina.png)",
        'background-position': 'center center',
        'background-attachment': 'fixed',
        'background-size': 'cover'
    }
);

    var audio = new Audio('sounds/zelda-secret.mp3');
    audio.play();

    alert("Secret Unlocked!");

}


// konami code
// 38 38  40    40    37   39    37    39   66  65   13
// up up down  down  left right left right  b   a   enter

