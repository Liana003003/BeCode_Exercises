
class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
this.topLeftXPos = topLeftXPos;
this.topLeftYPos = topLeftYPos;
this.width = width;
this.length = length;
  }
  collides(otherRectangle){
      if ((this.topLeftXPos + this.width >= otherRectangle.topLeftXPos && this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width) ||
      (this.topLeftYPos + this.length >= otherRectangle.topLeftYPos && this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.length))
  {return true} else {return false}
  }

}
let Rectang1 = new Rectangle(25, 25, 10, 10);
let Rectang2 = new Rectangle(50, 50, 10, 10);
let Rectang3 = new Rectangle(10, 30, 25, 30);
let Rectang4 = new Rectangle(20, 25, 25, 30);
console.log(Rectang1.collides(Rectang2));
console.log(Rectang1.collides(Rectang3));
console.log(Rectang2.collides(Rectang3));
console.log(Rectang1.collides(Rectang4));

