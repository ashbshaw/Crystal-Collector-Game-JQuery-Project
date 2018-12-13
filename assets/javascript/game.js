
// global variables
var userTotal = 0;
var wins = 0;
var losses = 0;

// start the game
$(document).ready(function () {

    // set value of #numberToMatch of random number between 19 - 120 and put it in #randomNumber id
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").prepend(targetNumber);

    // set a variable for each crystal
    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1);

    // win
    function win() {
        wins++;
        $("#numberWins").html(wins);
        reset()
    }

    // lose
    function lose() {
        losses++;
        $("#numberLosses").html(losses);
        reset()
    }
    
    // game reset
    function reset() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        console.log(targetNumber);
        $("#randomNumber").html(targetNumber);
        var number1 = Math.floor(Math.random() * 11 + 1);
        var number2 = Math.floor(Math.random() * 11 + 1);
        var number3 = Math.floor(Math.random() * 11 + 1);
        var number4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#userTotal").html(userTotal);
    }

    // on click for each jewel
    $("#one").on("click", function () {

        // adds value of crystal to userTotal
        userTotal = userTotal + number1;
        console.log(number1);

        // puts userTotal into html
        $("#userTotal").html(userTotal);

        if (userTotal === targetNumber) {
            alert("Great job!");
            win()
        }
        else if (userTotal > targetNumber) {
            alert("Too far!");
            lose()
        }
    });

    $("#two").on("click", function () {

        // adds value of crystal to userTotal
        userTotal = userTotal + number2;
        console.log(number2);

        // puts userTotal into html
        $("#userTotal").html(userTotal);

        if (userTotal === targetNumber) {
            alert("Great job!");
            win()
        }
        else if (userTotal > targetNumber) {
            alert("Too far!");
            lose()
        }
    });

    $("#three").on("click", function () {

        // adds value of crystal to userTotal
        userTotal = userTotal + number3;
        console.log(number3);

        // puts userTotal into html
        $("#userTotal").html(userTotal);

        if (userTotal === targetNumber) {
            alert("Great job!");
            win()
        }
        else if (userTotal > targetNumber) {
            alert("Too far!");
            lose()
        }
    });

    $("#four").on("click", function () {

        // adds value of crystal to userTotal
        userTotal = userTotal + number4;
        console.log(number4);

        // puts userTotal into html
        $("#userTotal").html(userTotal);

        if (userTotal === targetNumber) {
            alert("Great job!");
            win()
        }
        else if (userTotal > targetNumber) {
            alert("Too far!");
            lose()
        }
    });

})

