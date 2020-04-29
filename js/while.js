"use strict";
function displayDoubleTwo(){
    var output = "";
    var i = 2;
    while (i <= 65536) {
        output +=i + "\n";
        i *=2;
    }
    return output;
}

// console.log(displayDoubleTwo());