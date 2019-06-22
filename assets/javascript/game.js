//hi ashley!

//hello world!

if ($(document).ready) {

    //variables for use throughout functions
    var avengers = ['captain america', 'iron man', 'thor', 'hulk', 'captain marvel', 'thanos'];
    var selectedAvenger = "";
    var lettersInAvenger = [];
    var numOfBlanks = 0;
    var guessesPerGame = 12;
    var answer = []; 
    var wrongGuesses = [];
    var gameStarted = false;

    //screen elements
    $communications = $('#game-master');
    $winCounter = $('#win-counter');
    $lossCounter = $('#loss-counter');
    $guessesLeft = $('#guesses-left');
    $wrongGuesses = $("#wrong-guesses");
    $wordBlanks = $('#word-blanks');


    function startGame() {
        // reset counters
        $guessesLeft = guessesPerGame;

        //pick a word for the puzzle
        selectedAvenger = friends[Math.floor(Math.random() * friends.length)];
        lettersInAvenger = selectedAvenger.split("");
        numOfBlanks = lettersInAvenger.length;

        //update the screen with the new word
        for(var i=0; i<lettersInAvenger.length; i++){
            answer.push("_");
        }

        //update guessed letters list
        $wrongGuesses = wrongGuesses;
        $communications.text("Type a letter to guess!")
        gameStarted = true;
    }

    function guess(letter) {
        console.log("player guessed: " + letter);
        
        if (lettersInAvenger.includes(letter)) {
            //right guess
            console.log("right guess");
            /*
            for (var i = 0; i < numOfBlanks; i++){
                if(lettersInAvenger.includes(letter) && lettersInAvenger[i] == letter){
                    answer[i] = letter;
                }
                else{
                
                }
            }
            */
        } 
        else {
            //wrong guess
            guesses--;
            guessedLetters.push(letter);
            $(guesses);
            $("guessed-letters-list").html(gussedLetters);
        }
       
        }
    }

    function rewardPlayer() {
        

    }

    // capture keypress
    $(function() {
        $(window).keypress(function(e) {
            var ev = e || window.event;
            var key = ev.keyCode || ev.which;
            if (!gameStarted) { //start game
                startGame();
            } else { // user has guessed a letter
                guess(String.fromCharCode(key));
            }
        });
    });
}
    