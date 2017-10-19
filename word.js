var Letter = require("./letter.js");

var Word = function(newWord) {
  this.contains = [];
  for (var i=0; i<newWord.length; i++) {
    this.contains.push(new Letter(newWord[i]));
  }

  this.solved = false;
  this.guesses = 6;
  this.tried = [];

  this.checkLetters = function (check) {
    this.tried.push(check);
    var correct = false;
    this.solved = true;
    for (index in this.contains) {

      //has each letter evaluate against the guessed letter, and if no letters are changed, returns false for the below logic block
      var result = this.contains[index].show(check);
      if(result) correct = result;

      //check to see if letters are solved;
      if(!this.contains[index].solved) {
        this.solved = false;
      }
    }

    if(correct) {
      console.log("\nCORRECT!!!\n");
    }
    else {
      console.log("\nINCORRECT!!!\n");
      this.guesses--;
      console.log(this.guesses + " guesses remaining!!!\n");
    }
  }

  this.displayWord = function() {
    wordToDisplay = "";
    for (index in this.contains) {
      wordToDisplay += this.contains[index].display;
      if(this.contains[index].display !== " ") {
        wordToDisplay += " ";
      }
    }
    return wordToDisplay;
  }
}

module.exports = Word;