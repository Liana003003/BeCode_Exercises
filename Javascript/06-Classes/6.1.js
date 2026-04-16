
class Circle {
    constructor(xPos, yPos, radius) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.radius = radius; 
    }
    move(xOffset, yOffset){
      this.xPos = xOffset;
      this.yPos = yOffset;
    }
    get surface() {
        return Math.PI * this.radius * this.radius; 
  
    }
    
  }
  let circleFinal = new Circle(20, 25, 10);
  console.log(circleFinal.xPos, circleFinal.yPos); 
  console.log(circleFinal.surface); 
  circleFinal.move(10, 6); 
  console.log(circleFinal.xPos, circleFinal.yPos); 
  console.log(circleFinal.surface);

