/* I used the class Rectangle from the previous exercise */
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
  this.topLeftXPos = topLeftXPos;
  this.topLeftYPos = topLeftYPos;
  this.width = width;
  this.length = length;
  }
  collides(otherRectangle) {
    return (
        this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
        this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
        this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
        this.topLeftYPos + this.length > otherRectangle.topLeftYPos
    );
}}
  /* The randomRectangle function will return an array with a certain number of instances of Rectangle with random positions and sizes */
  function randomRectangle(number){
    let rectangles = [];
    for (let i = 0; i < number; i++) {
        let width = Math.floor(Math.random() * 100) + 1;
        let length = Math.floor(Math.random() * 100) + 1;
        let topLeftXPos = Math.floor(Math.random() * 5000) + 1;
        let topLeftYPos = Math.floor(Math.random() * 5000) + 1;
        rectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length))
    } return rectangles;
}
/* Setting the random number of instances to be generated to 1000 */
let rectangles = randomRectangle(1000);

/* collidingRectangles will return a Set instead of an Array to ensure that the rectangles that will be generated into 
the list are unique and not duplicated */
let collidingRectangles = new Set();
/* This first loop starts from the first rectangle and goes through every rectangle in the rectangles array */
for (let i = 0; i < rectangles.length; i++) {
    /* This second loop also goes through every rectangle but starts at the rectangle after the one from the first loop */
    for (let j = i + 1; j < rectangles.length; j++) {
        /* I used the collides method to check whether rectangle i collides with rectangle j and if they do to add them to the set */
        if (rectangles[i].collides(rectangles[j])) {
            collidingRectangles.add(rectangles[i]);
            collidingRectangles.add(rectangles[j]);
        }
    }
}


let solution = Array.from(collidingRectangles);
console.log(solution.length);
