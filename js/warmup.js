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
// fizzBuzz();

// Write a JavaScript function that takes in a string and returns the number of words in the string. If the function is ever passed an argument that is not a string, return the number 0.

function numberOfWords(string){
   if(typeof string === 'string'){
       return string.split(' ').length
   } else {
       return 0;
   }
}

// console.log(numberOfWords('This is 4 words'));
// console.log(numberOfWords(99));
// console.log(numberOfWords('this should be 5' + 9 + ' words'));

const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
};

function totalNumberOfItems(input){
    var sum = 0;
    for(var i = 0; i < input.length; i += 1){
        sum += i.items.quantity
    }
    return sum;
}

console.log(totalNumberOfItems(shoppingCart));