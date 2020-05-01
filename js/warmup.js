"use strict";

var favoriteShows = ['sherlock holmes', 'smallville', 'zombie', 'tigerman'];


favoriteShows.forEach(function(show ){
    console.log(show);
});


// Write a function that prints the numbers from 1 to 100
// For numbers divisible by 3, print “Fizz”
// For numbers divisible by 5, print “Buzz”
// For numbers divisible by both 3 and 5, print “FizzBuzz”
function divisibleByThree(num){
    if (i % 3 === 0){
        return "Fizz"
    }
}
function divisibleByFive(num){
    if (i % 5 === 0){
        return "Buzz"
    }
}

function fizzBuzz(){
    for (var i = 1; i <= 100; i += 1){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzBuzz');
        } else if(i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0){
                console.log('buzz');
            } else {
                console.log(i);
            }
        }
    }
fizzBuzz();