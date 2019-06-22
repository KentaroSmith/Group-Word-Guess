//hi ashley!

//hello world!

if ($(document).ready) {

    //variables for use throughout functions
    var avengers = ['captain america', 'iron man', 'thor', 'hulk', 'captain marvel', 'thanos'];
    var selectedAvenger = "";
    var lettersInAvenger = [];
    var numOfBlanks = 0;
    var guessesPerGame = 12;
    var answer = ""; 
    var wrongGuesses = "";
    var gameStarted = false;
    var guessesLeft = 0;
    var wins=0
    var losses=0;
    

    //screen elements
    var $communications = $('#game-master');
    var $winCounter = $('#win-counter');
    var $lossCounter = $('#loss-counter');
    var $guessesLeft = $('#guesses-left');
    var $wrongGuesses = $("#wrong-guesses");
    var $wordBlanks = $('#word-blanks');


    function startGame() {
        // reset counters
        guessesLeft = guessesPerGame;
        $guessesLeft.text(guessesLeft);

        //pick a word for the puzzle
        selectedAvenger = avengers[Math.floor(Math.random() * avengers.length)];
        lettersInAvenger = selectedAvenger.split("");
        numOfBlanks = lettersInAvenger.length;

        //update the screen with the new word
        for(var i=0; i<numOfBlanks; i++){
            answer.push("_");
        }

        //update guessed letters list
        $wrongGuesses.text(wrongGuesses);
        $communications.text("Type a letter to guess!");
        gameStarted = true;
    }

    function guess(letter) {
        console.log("player guessed: " + letter);
        
        if (lettersInAvenger.includes(letter)) {
            //right guess
            console.log("right guess");
            
            for (var i = 0; i < numOfBlanks; i++){
                if(lettersInAvenger[i] == letter){
                    $wordBlanks.text(letter);
                }
                else{
                
                }
            }
            // check if the player completed the puzzle
            if (answer === selectedAvenger) {
                // player won: Todd
                $communications = "Congrats! You WIN! Press any key to play again.";
                wins = parseInt($winCounter.text()) + 1;
                $winCounter.text(wins);
                startGame();
            }


        } 
        else {
            //wrong guess
            guessesLeft--;
            wrongGuesses += letter;
            $guessesLeft.text(guessesLeft);
            $wrongGuesses.text(wrongGuesses);

            if (guessesLeft === 0) {
                $communications="Congrats! You suck. Play again?";
                losses=losses+1;
                $lossCounter.text(losses);
                startGame();
            }
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

    