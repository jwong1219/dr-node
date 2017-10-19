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

console.log("Welcome to Dr. Node Hangman!")

// getNewWord();

chosen = "Casino Royale";
console.log(chosen);
wordObj = new Word(chosen);
console.log(wordObj.displayWord());

// inquirer.prompt([
//   {
//     name: "guess",
//     message: "Guess a letter!"
//   }
// ]).then(function(answer) {
//   // console.log(resources.alphabet.indexOf(answer.guess));
//   if(resources.alphabet.indexOf(answer.guess) < 0) {
//     console.log("That's not a letter!");
//   }
//   else if (wordObj.tried.indexOf(answer.guess) !== -1) {
//     console.log("You've already guessed that letter!");
//   }
//   else {
//     console.log(wordObj.contains.indexOf(answer.guess));
//     wordObj.checkLetters(answer);
//   }
//   console.log(wordObj.displayWord());

// });

console.log(wordObj.contains[0].show.constructor);

wordObj.checkLetters("a");
console.log(wordObj.displayWord());
wordObj.checkLetters("s");
console.log(wordObj.displayWord());
wordObj.checkLetters("i");
console.log(wordObj.displayWord());
wordObj.checkLetters("o");
console.log(wordObj.displayWord());



