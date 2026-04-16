const prompt = require('prompt-sync')();

let userAge = prompt("What is your age?");
if (userAge >= 18) { 
  console.log("You are an adult")
} else {
  console.log("You are not yet an adult")}