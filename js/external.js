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

var googlePayPerHourDollars = parseInt(prompt("What is your pay per hour for Google?"));

var amazonPayPerHourDollars = parseInt(prompt("What is your pay per hour for Amazon?"));

var facebookPayPerHourDollars = parseInt(prompt("What is your pay per hour for Facebook?"));

var facebookHours =  parseInt(prompt("How many hours did you work for Facebook?"));

var googleHours = parseInt(prompt("How many hours did you work for Google?"));

var amazonHours = parseInt(prompt("How many hours did you work for Amazon?"));

var totalWeekPayDollars = parseInt((googlePayPerHourDollars * googleHours) + (amazonPayPerHourDollars + amazonHours) + (facebookPayPerHourDollars * facebookHours));

alert("You made " + totalWeekPayDollars + " this week!");

// class schedule
var classIsNotFull = confirm("Confirm that the class is not full");
var classScheduleClear = confirm("Confirm that the schedule is clear");

var studentEnrolled = (classIsNotFull && classScheduleClear);

alert("Student  enrollment status: " + studentEnrolled);


// product offer

var discountBreakPoint = 2;
var numberOfItems = Number(prompt("How many items were bought?"));
var offerIsNotExpired = confirm("Confirm offer has not expired.");
var isPremiumMember = confirm("Customer is a premium member");

var productDiscountIsApplied = offerIsNotExpired && (isPremiumMember || numberOfItems >= discountBreakPoint);

alert("Product discount applied: " + productDiscountIsApplied);