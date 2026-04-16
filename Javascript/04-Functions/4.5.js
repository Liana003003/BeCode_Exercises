//Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space
//The mathematical formula to do that is distance=√((x2 – x1)² + (y2 – y1)²). 
//The method Math.hypot() returns the square root of the sum of squares of the given arguments

function calcDistance([x1, y1], [x2, y2]) { 
    return Math.floor(Math.hypot(x2 - x1, y2 - y1) * 100) / 100; }
   ///Math.floor(number * 100) / 100 in order to get a rounded number with two decimals if the returned number is not an integer

   console.log(calcDistance([1, 1], [2, 2]));
   console.log(calcDistance([1, 1], [3, 1]));
   console.log(calcDistance([4, 1], [1, 1]));
   console.log(calcDistance([-2, 2], [2, -2]));
   