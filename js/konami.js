"use strict";

// $(document).keydown(function () {
//     if (e.keyCode == 72){
//         $(#h).play();
//     }
//
// })

var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b',
        13: 'start'
    };

// Epona's song
    var eponaSong = ['up', 'left', 'right', 'up', 'left', 'right'];

// the 'official' Konami Code sequence
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'start'];

// a variable to remember the 'position' the user has reached so far.
    var CodePosition = 0;

// add keydown event listener
    $(document).keyup(function (e) {
        // get the value of the key code from the key map
        var key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
        var requiredKey = konamiCode[CodePosition];

        // compare the key with the required key
        if (key == requiredKey) {

            // move to the next key in the konami code sequence
            CodePosition++;

            // if the last key is reached, activate cheats
            if (CodePosition == konamiCode.length) {
                activateSecret();
                CodePosition = 0;
            }
        } else {
            CodePosition = 0;
        }
    });
    function epona(){
        var audio = new Audio("sounds/Epona's_Song.mp3");
        audio.play();
    }
    function activateSecret() {
        $('body').css({
                'background-image': "url(img/ocarina.png)",
                'background-position': 'center center',
                'background-attachment': 'fixed',
                'background-size': 'cover'
            }
        );

        var audio = new Audio('sounds/zelda-secret.mp3');
        audio.play();

        alert("Secret Unlocked!");
        // keyboard events for ocarina sounds
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 72) {
                document.getElementById('h').play();
            }
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 38) {
                    document.getElementById('up').play();
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 37) {
                    document.getElementById('left').play();
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 39) {
                    document.getElementById('right').play();
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 40) {
                    document.getElementById('down').play();
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.keyCode == 65) {
                    document.getElementById('a').play();
                }
            });
        });
        // add keydown event listener
        $(document).keyup(function (e) {
            // get the value of the key code from the key map
            var key2 = allowedKeys[e.keyCode];
            // get the value of the required key from the Epona song code
            var requiredKey2 = eponaSong[CodePosition];

            // compare the key with the required key
            if (key2 == requiredKey2) {

                // move to the next key in the konami code sequence
                CodePosition++;

                // if the last key is reached, activate cheats
                if (CodePosition == eponaSong.length) {
                    // var playEponaSong = new Audio("sounds/Epona's_Song.mp3");
                    // playEponaSong.play();
                    alert("Epona's Song");
                    var audio = new Audio('sounds/zelda-secret.mp3');
                    audio.play();
                    CodePosition = 0;
                }
            } else {
                CodePosition = 0;
            }
        });

    }



// konami code
// 38 38  40    40    37   39    37    39   66  65   13
// up up down  down  left right left right  b   a   enter

