const lettersToDisplay = function(word, goodGuesses) {

    this.gameWord = word;
    this.goodGuesses = goodGuesses;
    this.displayText = "";

    this.winner = false;

    this.parseDisplay = function() {

        var shown = "";
        
        if (this.goodGuesses == undefined) {
            for (var i = 0; i < this.gameWord.length; i++) {
                shown += "_";
            }
        } else {
            for (var i = o; i < this.gameWord.length; i++) {

                var foundLetter = false;

                for (var j =0; j < this.goodGuesses.length; j++) {
                    if (this.gameWord[i] == this.goodGuesses[j]) {
                        shown += this.goodGuesses[j];
                        foundLetter = true;
                    }
                } if (foundLetter) {
                    shown += "_";
                }
            }
        }

        this.displayText = shown.trim();
        console.log(this.displayText);

        if (this.displayText == this.gameWord) {
            this.winner = true;
        }
    }
};

module.exports = lettersToDisplay;