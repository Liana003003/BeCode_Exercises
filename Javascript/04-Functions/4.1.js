const prompt = require('prompt-sync')();

function calcSurface(a, b) {
    return a * b;
    }
    a = prompt("What is the length of the rectangle ");
    b = prompt("What is the width of the rectangle "); 
    console.log(calcSurface(a, b));
    
    /* Function calcSurface is meant to calculate the surface of a rectangle using numbers given outside the function. 
    a is substituting lenght while b is the width. The function returns the math needed to calculate the surface, length x width */