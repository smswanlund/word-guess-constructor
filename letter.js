// Letter Constructor
var Letter = function(letter) {

    this.val = letter.toString(),
    this.alreadyGuessed = false,

    this.letterReturn = function() {

        if (this.alreadyGuessed === true) {
            return val;
        }
        else if (this.alreadyGuessed === false){
            return "_";
        }
        
    },

    this.letterCheck = function(guess) {

        if(guess===letter) {
            alreadyGuessed = true;
        }

    }

}

module.exports = Letter;