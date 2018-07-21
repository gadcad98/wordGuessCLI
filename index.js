// Links // require commands
const inquirer = require("inquirer");
const checkForLetter = require("./word");
const lettersToDisplay = require("./letter");

// Global variables
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const guessedLetters = [];
const correctlyGuessedLetters = [];
// const displayGame = lettersToDisplay;

const wordsArray = [
    "javascript",
    "camelcase",
    "concatenation",
    "boolean",
    "mozilla",
    "nodelist",
];

const guessedWordsArray = wordsArray;

const game = {
    wordBank: guessedWordsArray,
    guessesRemaining: 10,
    currentWord: null,

    // function
    startGame: function() {
        this.guessesRemaining = 10;

        var j = Math.floor(Math.random() * this.wordBank.length);
        this.currentWord = this.wordBank[j];

        console.log("Guess Coding Words");

        displayGame = new lettersToDisplay(this.currentWord);
        displayGame.parseDisplay();

        console.log("Guesses Remaining: " + game.guessesRemaining);

        continuePrompt();

    }
};

// Prompt and .then function
function continuePrompt() {
    console.log(" ");

    if (game.guessesRemaining > 0) {
        inquirer.prompt([{
            type: "value",
            name: "letter",
            message: "Guess a Letter: "
        }]).then(function (userInput) {

            var inputLetter = userInput.letter.toLowercase();

            if (alphabet.indexOf(inputLetter) == -1) {

                console.log('"' + inputLetter + '" is not a letter. "caps lock" may be on... try again');
                console.log("Guesses left: " + game.guessesRemaining);
                console.log("Already guessed: " + guessedLetters);
                continuePrompt();
            } else if (alphabet.indexOf(inputLetter) != -1 && guessedLetters.indexOf(inputLetter) != -1) {

                console.log('"' + inputLetter + '" ... nope! Try again');
                console.log("Guesses left: " + game.guessesRemaining);
                console.log("Letters guessed: " + guessedLetters);
                continuePrompt();
            } else {

                guessedLetters.push(inputLetter);

                var letterOfWord = checkForLetter(inputLetter, game.currentWord);

                if (letterOfWord) {
                    correctlyGuessedLetters.push(inputLetter);

                    displayGame = new lettersToDisplay(game.currentWord, correctlyGuessedLetters);
                    displayGame.parseDisplay();

                    if (displayGame.winner) {
                        console.log("You won!");
                        console.log("You know code!")
                        return;
                    } else {
                        console.log("Guesses left: " + game.guessesRemaining);
                        console.log("Letters guessed: " + guessedLetters);
                    }

                } else {
                    game.guessesRemaining --;

                    displayGame.parseDisplay();
                    console.log("Guesses left: " + game.guessesRemaining);
                    console.log("Letters guessed: " + guessedLetters);
                    continuePrompt();
                }
            }
        });
    } else {
        console.log("Are you a newb?");
        console.log('The word was "' + game.currentWord + '".');
    }
}

game.startGame();