//connects letter constructor
var Letter = require("./letter.js");


// word constructor
var Word = function(word) {

    this.answer = word,
    this.test = [],

    this.makeWord = function () {

        for(var i=0; i<answer.length; i++) {

            var letter = new Letter(answer[i]);
            this.test.push(letter);

        }
    },

    this.displayWord = function() {

        var display = [];

        for (var i=0; i<this.test.length; i++) {
            display.push(this.test[i].letterReturn());
        }
        return display.join(" ");

    }

}

module.exports = Word;