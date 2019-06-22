//hi ashley!

//hello world!

//variables for use throughout functions
var avengers = ['captain america', 'iron man', 'thor', 'hulk', 'captain marvel', 'thanos'];
var selectedAvenger = "";
var lettersInAvenger = [];
var numOfBlanks = 0;
var guessesPerGame = 12;
var answer = [];
var guessedLetters = [];

//screen elements
$winCounter = $('#win-counter');
$lossCounter = $('#loss-counter');
$guessesLeft = $('#guesses-left');
$wrongGuesses = $("#wrong-guesses");
$wordBlanks = $('#word-blanks');


function startGame() {
    // reset counters
    $guessesLeft = guessesPerGame;

    //pick a word for the puzzle


    // update the screen with the new word

    //update guessed letters list


}

function guess() {

}

function rewardPlayer() {

}

$("window").keypress(function () {
    console.log("Handler for .keypress() called.");
});
