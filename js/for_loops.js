'use strict';
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}
// showMultiplicationTable(3);
// ======================================================================================================================
// 3
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

// for (var i = 1; i <= 10; i+= 1) {
//     var random = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
//     var evenOrOddMessage = "";
//     if (random % 2 ==0){
//         evenOrOddMessage = " is even";
//     } else {
//         evenOrOddMessage = " is odd";
//     }
//     console.log(random + evenOrOddMessage);
// }

// ======================================================================================================================
// 4
// for (var i = 1; i < 10; i += 1){
//     var output = "";
//     for (var j = 1; j <= i; j += 1) {
//         output += i;
//     }
//     console.log(output);
// }
for (var i = 1; i < 10; i += 1){
    console.log(i.toString().repeat(i));
}

// 5
// for (var i = 100; i >= 1; i--){
//     if (i % 5 == 0) {
//         console.log(i)
//     }
// }

