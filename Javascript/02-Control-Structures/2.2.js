const prompt = require('prompt-sync')();

let min = prompt("Give first number?"); 
let max = prompt("Give second number"); 
let current = prompt("Give third number"); 
if ((current < max) && (current > min)) { 
  console.log(current);
  } else if (min > max) 
  {console.log("You suck");
  } else {console.log("No comment");}