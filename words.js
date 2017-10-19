var wordsList = ["Dr No","From Russia With Love","Goldfinger","Thunderball","You Only Live Twice","On Her Majestys Secret Service","Diamonds Are Forever","Live and Let Die","The Man with the Golden Gun","The Spy Who Loved Me","Moonraker","For Your Eyes Only","Octopussy","Never Say Never Again","A View to a Kill","The Living Daylights","Licence to Kill","GoldenEye","Tomorrow Never Dies","The World Is Not Enough","Die Another Day","Casino Royale","Quantum of Solace","Skyfall","Spectre"];

var alph = "abcdefghijklmnopqrstuvwxyz";
var alphArray = alph.split("");

var gun = "\n     0000             0000        7777777777777777/========___________\n   00000000         00000000      7777^^^^^^^7777/ || ||   ___________\n  000    000       000    000     777       7777/=========//\n 000      000     000      000             7777// ((     //\n0000      0000   0000      0000           7777//   \\\\   //\n0000      0000   0000      0000          7777//========//\n0000      0000   0000      0000         7777\n0000      0000   0000      0000        7777\n 000      000     000      000        7777\n  000    000       000    000       77777\n   00000000         00000000       7777777\n     0000             0000        777777777\n"

module.exports = {
  words: wordsList, 
  alphabet: alphArray,
  gun: gun
};
