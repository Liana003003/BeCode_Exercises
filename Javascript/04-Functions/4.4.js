//The rand10() function will give me a random number from 1 to 11 which is the total number of learners
function rand10() {
    return Math.floor((Math.random() * 11) + 1);
  }
let learners_array = [];
function pickLearner(inputAr, n) { 
  for (let i = 0; i < n; i++){ 
learners_array.push(inputAr[i]);
}
  if (n > 0 && n < inputAr.length) { return inputAr[n]};
}
  let listNames = ["Antoine", "Arsenia", "Hugo", "Kamal", "Liana", "Jordan", "Manu", "Martin", "Stephan", "Valentin ", "Inna"];
  let lucky = rand10();
pickLearner(listNames, lucky);
console.log(learners_array);





  /*Let it be known that I spent hours trying to complete this particular exercice. I had written the code 
  and for the life of me I couldn't figure out why it wasn't working. It turns out I had written Console.log with 
  a capital C...  */


