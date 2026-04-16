//Duplicate option 1
const clothes = ["t-shirt", "shoes", "tie", "suit"];
const clothes2 = clothes;
console.log(clothes2);

//Duplicate option 2
const clothes3 = ["t-shirt", "shoes", "tie", "suit"];
const costume2 = [...clothes3];
costume2.push();
console.log(costume2);  //It works but not sure if this is the one that we were meant to do

//Duplicate option 3
const clothes4 = ["t-shirt", "shoes", "tie", "suit"];
const costume3 = clothes4.slice();
console.log(costume3);