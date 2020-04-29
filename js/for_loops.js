'use strict';

// 2
function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i))
    }
}
// showMultiplicationTable(3);
// 3

function randomNum() {
    return Math.floor(Math.random() * (200 - 20) ) + 20;
}

// console.log(randomNum(20, 200));
function evenOrOdd(num){
    if (num % 2 == 0){
        console.log (num + " is even")
    } else {
        console.log (num + " is odd")
    }
}
var randomEvenOrOdd = evenOrOdd(randomNum());

for (var i = 1; i <= 10; i++) {
    console.log(randomEvenOrOdd + i);
}


// 5
// for (var i = 100; i >= 1; i--){
//     if (i % 5 == 0) {
//         console.log(i)
//     }
// }

