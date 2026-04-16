const prompt = require('prompt-sync')();

let choice = prompt("Pick a number from 1 to 7");
if (choice === 1){ console.log('Monday');}
else if (choice === 2){ console.log('Tuesday');}
else if (choice === 3){ console.log('Wednesday');}
else if (choice === 4){ console.log('Thursday');}
else if (choice === 5){ console.log('Friday');}
else if (choice === 6){ console.log('Saturday');}
else { console.log('Sunday');}