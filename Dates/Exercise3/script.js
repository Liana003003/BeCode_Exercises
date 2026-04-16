let currentTime = new Date();
let dateBrussels = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Europe/Brussels",
}).format(currentTime);
let future = new Intl.DateTimeFormat("en-GB", {
   dateStyle: "full",
   timeStyle: "long", timeZone:
   "Europe/Brussels"
}).format(currentTime.getTime() + (80000 * 60 * 60 * 1000));

document.getElementById("now").innerHTML = dateBrussels;
document.getElementById("result").innerHTML = future;

function calculateHours(userInput) {
let futureTime = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Europe/Brussels"
}).format(currentTime.getTime() + (userInput * 60 * 60 * 1000));
return futureTime;
}

let userInputField = document.getElementById("userInput");

document.getElementById("userInput").addEventListener("keyup", function () {
    let userInput = parseFloat(userInputField.value);
    document.getElementById("calc").innerHTML = calculateHours(userInput);

});

