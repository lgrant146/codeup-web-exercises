"use strict";

console.log("Hello from external JavaScritpt");

// Welcome

alert ("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Cool my favorite color is " + favoriteColor + " too!");

// Movie Rental

var pricePerDayInDollars = parseInt(prompt("What is the price per day for renting movies?"));

console.log("price per day is ", pricePerDayInDollars);

var littleMermaidRentalInDays = parseInt(prompt("How many days will the kids watch The Little Mermaid?"));

console.log("Little Mermaid rental in days is ", littleMermaidRentalInDays);

var brotherBearRentalInDays = parseInt(prompt("How many days will the kids watch Brother Bear?"));

console.log("Brother bear rental in days is ", brotherBearRentalInDays);

var herculesRentalInDays = parseInt(prompt("How many days will the kids watch Hercules?"));

console.log("Hercules rental in days is ", littleMermaidRentalInDays);

var totalPriceForRentalMovies = parseInt(littleMermaidRentalInDays + brotherBearRentalInDays + herculesRentalInDays) * pricePerDayInDollars;

alert("The total cost of renting the movies for the kids will be " + totalPriceForRentalMovies);

// Pay per hour

var googlePayPerHourDollars = 400

var amazonPayPerHourDollars = 380

var facebookPayPerHourDollars = 350

var facebookHours = 10

var googleHours = 6

var amazonHours = 4

var totalWeekPayDollars = (googlePayPerHourDollars * googleHours) + (amazonPayPerHourDollars + amazonHours) + (facebookPayPerHourDollars * facebookHours)
