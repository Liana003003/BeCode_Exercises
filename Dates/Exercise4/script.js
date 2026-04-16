let currentTime = new Date();

// Day names
let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
              "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

document.getElementsByClassName('top')[0].innerHTML =
  days[currentTime.getDay()];

document.getElementsByClassName('date')[0].innerHTML =
  currentTime.getDate();

document.getElementsByClassName('month')[0].innerHTML =
  months[currentTime.getMonth()];

document.getElementsByClassName('bottom')[0].innerHTML =
  currentTime.getFullYear();

function updateClock() {
  let currentTime = new Date();

  let hours = currentTime.getHours().toString().padStart(2, "0");
  let minutes = currentTime.getMinutes().toString().padStart(2, "0");
  let seconds = currentTime.getSeconds().toString().padStart(2, "0");

  document.getElementsByClassName('time')[0].innerHTML =
    hours + ":" + minutes + ':' + '<span class="seconds">' + seconds + '</span>';
}

setInterval(updateClock, 1000);
updateClock();