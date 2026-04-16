const prompt = require('prompt-sync')();

function askTvSeries() {
    function name() {
        return prompt("What's your favorite Tv series?");
    }
    function proYear() {
        return prompt("What year did it start airing?");
    }
    function actors() {
    let actorsList = [];
    let keepAsking = true;
    
    while (keepAsking) {
       
        let userInput = prompt("Which actors are in the series? Please type 'exit' when done.");
        if (userInput === 'exit') {
            keepAsking = false;
        } else {
            actorsList.push(userInput);
        }
    }
    return actorsList;
}

let answers = { 
    "Name" : name(), 
    "Production Year" : proYear(), 
    "Actors" : actors()
  };
return answers;
}

  console.log(JSON.stringify(tvSeries, null, ''));