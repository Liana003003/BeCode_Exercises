const prompt = require('prompt-sync')();

let n = parseInt(prompt("Give me a number from 1 to 10"));
let addition = 0;
for (let i = 0; i < n; i++) {
    let userInput = parseInt(prompt("Enter another number"));
  addition += userInput;  
}

console.log(addition);