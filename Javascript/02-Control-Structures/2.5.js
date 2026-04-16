const prompt = require('prompt-sync')();

let userNumber = prompt("What is your favorite number?");
do { 
prompt("What is your favorite number?");
  console.log("Are you sure");
} while (userNumber === 42);