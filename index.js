//modules and requirements
var Word = require("./word.js");
var inquirer = require("inquirer");

wordList = ["already", "did", "this", "assignment", "but", "not", "with", "node"];
var selector = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0;

//choose a word, use word.js to get format for game, chosenWord for checking answer
function startGame() {

    //restarts word list if it gets down to 1 word
    if(wordList.length<2) {
        wordList = ["already", "did", "this", "assignment", "but", "not", "with", "node"];
    }

    //populates chosenWord and gameWord
    selector = Math.floor(Math.random()*wordList.length);
    chosenWord = wordList[selector];
    gameWord = new Word(chosenWord);
    gameWord.makeWord();

    //removes word from wordList
    if(selector> -1) {
    wordList.splice(selector, 1);
    }

    console.log("\n You have 5 letter guesses to get the word.\n");

    userPrompt();
}

//takes user input and tallies guesses
function userPrompt() {

    if (counter<5) {

        console.log(gameWord.displayWord());

        inquirer.prompt([

            {
                type: "input",
                name: "letter",
                message: "\nPick a letter!"
            }

        ]).then(function(answer) {

            checkAnswer(answer);

        });

    }

    else{

        console.log("\nYou've run out of guesses\n");
        console.log("the answer was" + chosenWord);

        chosenWord = "";
        gameWord = "";
        selector = 0;
        counter = 0;

        startGame();

    }
}

//checks input for correct format, compares input to gameWord
function checkAnswer(answer) {

    //if input is one character and is a letter from a to z...
    if ((answer.letter.length ===1) && /^[a-zA-Z]+$/.test(answer.letter)) {


        var check = answer.letter.toUpperCase();
        var temp = gameWord.displayWord();

        if (temp===gameWord.displayWord()) {

            console.log("\nSorry, wrong letter\n");

            counter++;
            console.log((5-counter)+" guesses remaining");
            userPrompt();
        }

        //processes correctly guessed letters
        else {
            rightGuess();
        }

    }

    //repeats initial prompt
    else {

        console.log("\nPlease enter a single letter\n");
        userPrompt();

    }

}

//display correctly guessed letters
function rightGuess() {

    console.log("\nYou guessed correctly\n");

    //compares chosenWord and gameWord with spaces taken out
    if(chosenWord.replace(/ /g,"") == (gameWord.displayWord()).replace(/ /g,"")) {

        console.log(gameWord.displayWord());
        console.log("\nYou Win!\n");

        chosenWord = "";
        gameWord = "";
        selector = 0;
        counter = 0;

        startGame();

    }

    else {
        userPrompt();
    }
}

startGame();