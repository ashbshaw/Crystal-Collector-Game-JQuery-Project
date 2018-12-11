
// global variables
var userTotal = 0;
var wins = 0;
var losses = 0;

// start the game
$(document).ready(function () {

    // to set value of #numberToMatch of random number between 19 - 120 and put it in #randomNumber id
    var targetNumber = Math.floor(Math.random() * 121 + 19);
    $("#randomNumber").prepend(targetNumber);

    // to set value of crystals between 1 - 12
    var crystalValue = Math.floor(Math.random() * 11 + 1);

    // for loop to assign values to crystals each time
    for (var i = 0; i < crystalValue.length; i++) {

        // each crystal will be given a data attribute called data-crystalValue which is set equal to array value
        crystalValue.attr("data-crystalvalue", numberOptions[i]);

        // each crystal image is assigned a random number
        $(".crystal-image").parseInt(crystalValue);
    }

    // on click
    $(".crystal-image").on("click", function () {

        // use $(this) to extract crystal value of clicked crystal
        // use .attr("data-crystalvalue") to grab the value out of the "data-crystalvalue" attribute 
        // use parseInt to convert the string to an integer
        // HELP SOMETHING IS BROKEN
        crystalValue = ($(this).attr("data-crystalvalue"));

        // we then add the crystalValue to the userTotal which is a global variable.
        // every click, from every crystal adds to the userTotal
        userTotal += crystalValue;

        // use parseInt to convert our string representation of numbers into actual integers
        // NEED HELP - THIS IS NOT WORKING
        crystalValue = parseInt(crystalValue);

    });

    $("#userTotal").prepend(userTotal);

    // displays number of wins and losses
    if (userTotal === randomNumber) {
        wins++;
        $("#numberWins").html(wins);
        reset()
    }

    else if (userTotal > randomNumber) {
        losses++;
        $("#numberLosses").html(losses);
        reset()
    }

})

    // game reset

    function reset () {
    targetNumber = Math.floor(Math.random() * 121 + 19);
    console.log(targetNumber);
    $("#randomNumber").prepend(targetNumber);
    crystalValue = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    }
