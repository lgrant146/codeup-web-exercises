(function() {

    "use strict";

// Prompt and check if number is odd between 1 and 50 and also a number

    function isInRange(input, min, max) {
        return input >= min && input <= max;
    }

    function isNumber(input) {
        return !isNaN(input);
    }

    function isInteger(input) {
        return input === Math.floor(input);
    }

    function isOdd(input) {
        return input % 2 !== 0;
    }

    function isValidInput(input) {
        input = parseFloat(input);
        return isInRange(input, 1, 50) && isNumber(input) && isOdd(input) && isInteger(input);
    }

    function getUserInput() {
        var userInput;
        while (true) {
            userInput = prompt("Please enter an odd number between 1 and 50");
            if (isValidInput(userInput)) {
                userInput = parseInt(userInput);
                break;
            } else {
                alert("Invalid input!");
            }

        }
        return userInput;
    }

//put in a loop

    function runNumbers(min, max) {
        var userInput = getUserInput();
        var output = "Number to skip is: " + userInput + '\n\n';
        for (var i = min; i <= max; i += 1) {
            if (!isOdd(i)) {
                continue;
            }
            output += (userInput !== i) ? "Here is an odd number: " + i : "Yikes Skipping number: " + userInput;
            output += "\n";
        }
        return output;
    }

    console.log(runNumbers(1, 50));
})();