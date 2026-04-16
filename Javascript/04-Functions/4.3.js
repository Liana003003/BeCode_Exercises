const prompt = require('prompt-sync')();

function rand10() {
  return Math.floor((Math.random() * 10) + 1);
}
let number_array = [];
function multiRand(n) { 
for (let i = 0; i < n; i++){ 
let num = rand10();
number_array.push(num);
}
}
multiRand(prompt("Enter a number between 1 and 10 "));
console.log(number_array);
