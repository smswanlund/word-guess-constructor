//connects letter constructor
var Letter = require("./letter.js");


// word constructor
var Word = function(word) {

    this.word = word,
    this.testWord = [],

    this.makeWord = function () {

        for(var i=0; i<word.length; i++) {

            var letter = new Letter(word[i]);
            this.testWord.push(letter);

        }
    },

    this.displayWord = function() {

        var display = [];

        for (var i=0; i<this.testWord.length; i++) {
            display.push(this.testWord[i].letterReturn());
        }
        return display.join(" ");

    }

}

module.exports = Word;