var inquirer = require("inquirer");
var Word = require("./word.js");
var resources = require("./words.js");
var Letter = require("./letter.js");

var chosen = "Toy Story";
var wordObj = {};

function getNewWord() {
  randIndex = Math.floor(Math.random() * resources.words.length);
  chosen = resources.words[randIndex];
  
  wordObj = new Word(chosen);
}

console.log("Welcome to Dr. Node Hangman! \n");

// getNewWord();

chosen = "Casino Royale";
// console.log(chosen);
wordObj = new Word(chosen);
console.log(wordObj.displayWord());
console.log("\n");

function gameStage() {
  inquirer.prompt([
    {
      name: "guess",
      message: "Guess a letter!"
    }
  ]).then(function(answer) {
    // console.log(resources.alphabet.indexOf(answer.guess));
    var guess = answer.guess.toLowerCase();
    // console.log({guess});
    if(resources.alphabet.indexOf(guess) < 0) {
      console.log("\nThat's not a letter! \n");
    }
    else if (wordObj.tried.indexOf(guess) !== -1) {
      console.log("\nYou've already guessed that letter! \n");
    }
    else {
      wordObj.checkLetters(guess);
    }
    console.log(wordObj.displayWord());
    next();
  });
}

function next() {
  if (wordObj.guesses > 0 && !wordObj.solved) {
    gameStage();
  }
  if (wordObj.solved || wordObj.guesses === 0) {
    if (wordObj.solved) {console.log("You Win!!!\n");}
    else if(wordObj.guesses === 0) {console.log("You Lose!!!\n");}
    inquirer.prompt([
      {
        type: "confirm",
        message: "Would you like to play again?",
        name: "restart"
      }
    ]).then(function(answer) {
      if(answer.restart) {
        getNewWord();
        console.log("Welcome to Dr. Node Hangman! \n");
        console.log(wordObj.displayWord());
        console.log("\n");
        gameStage();
      }
      else {
        console.log("\n***Thanks for playing!***");
      }
    })
  }
}

gameStage();

// wordObj.checkLetters("a");
// console.log(wordObj.displayWord());
// wordObj.checkLetters("s");
// console.log(wordObj.displayWord());
// wordObj.checkLetters("i");
// console.log(wordObj.displayWord());
// wordObj.checkLetters("o");
// console.log(wordObj.displayWord());



