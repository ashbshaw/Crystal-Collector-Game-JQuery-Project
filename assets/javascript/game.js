// variables

var counter = 0


var userTotal = 0;
var wins = 0;
var losses = 0;

// for loop

$(".numberToMatch").text(targetNumber);

// for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    // var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    // imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    // imageCrystal.attr("src", "assets/images/red.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    // $("#crystals").append(imageCrystal);
}


/// in progress

$(document).ready(function () {

    // computer selects a random number between 19 - 120
    var random = Math.floor(Math.random() * 101 + 19)

    // random number displays in span id titled #randomNumber
    $("#randomNumber").text(Random);


    // generates four numbers between 1 - 12 to assign to crystals

    var number1 = Math.floor(Math.random() * 11 + 1)
    var number2 = Math.floor(Math.random() * 11 + 1)
    var number3 = Math.floor(Math.random() * 11 + 1)
    var number4 = Math.floor(Math.random() * 11 + 1)


    // player selects crystal

    $(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});

    

// crystal value appears in span id titled #userTotal on each click until player either wins or loses


// score updates with win or loss tally


// game restarts automatically

