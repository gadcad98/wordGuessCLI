// Links // require commands
const inquirer = require("inquirer");
const checkForLetter = require("./word");
const lettersToDisplay = require("./letter");

// Global variables
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const guessedLetters = [];
const correctlyGuessedLetters = [];
const displayGame;

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
        this.guessesRemaining;

        
    }
}