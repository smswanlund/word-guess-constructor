// Letter Constructor
var Letter = function(letter) {

    this.val = letter.toString(),
    this.alreadyGuessed = false,

    this.letterReturn = function() {

        if(alreadyGuessed === true) {
            return val;
        }
        else if (alreadyGuessed === false){
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