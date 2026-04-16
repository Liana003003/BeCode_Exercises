let date = new Date();
let dateBrussels = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Europe/Brussels",
}).format(date);
let dateAnchorage = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "America/Anchorage",
    }).format(date);
let dateReykjavik = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Atlantic/Reykjavik",
  }).format(date);
let dateSaintPetersburg = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Europe/Moscow",
  }).format(date);

document.getElementById("USA").innerHTML =
  "<strong>Anchorage, USA</strong> ==> " + dateAnchorage + "<br>" +
  "<strong>Brussels, Belgium</strong> ==> " + dateBrussels;

document.getElementById("Iceland").innerHTML =
  "<strong>Reykjavik, Iceland</strong> ==>  " + dateReykjavik
  + "<br>" + "<strong>Brussels, Belgium</strong> ==> " + dateBrussels;

document.getElementById("Russia").innerHTML =
  "<strong>Saint-Petersburg, Russia</strong> ==> " + dateSaintPetersburg
  + "<br>" + "<strong>Brussels, Belgium</strong> ==> " + dateBrussels;