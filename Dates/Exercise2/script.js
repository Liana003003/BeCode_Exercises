let currentDay = new Date();
let myBirthday = new Date('1988-06-01');

document.getElementById("myBirthday").innerHTML = (Math.floor(currentDay / (1000 * 60 * 60 * 24)) - Math.floor(myBirthday / (1000 * 60 * 60 * 24))) + " days have passed since I was born."

function numberOfDaysPassed() {
let chosenDay = new Date(prompt("When is your birthday? (Use this format please: yyyy-mm-dd"));
document.getElementById("yourBirthday").innerHTML = (Math.floor(currentDay / (1000 * 60 * 60 * 24)) - Math.floor(chosenDay / (1000 * 60 * 60 * 24))) + " days have passed since you were born."
};
window.onload = numberOfDaysPassed;

