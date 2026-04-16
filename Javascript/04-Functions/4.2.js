function rand10() {
    return Math.floor((Math.random() * 10) + 1);
  }
  console.log(rand10());
  
  /* To generate a random number I needed to use the method math.random(). This method returns a
  number from 0 (inclusive) to 1 (exclusive). In order to get a random number from 1 to 10 I 
  needed to multiply the number I got from Math.random() with 10 so Math.random() * 10. The number 
  I was going to get wouldn't include 10 so I added +1 to my code. Lastly, I used the Math.floor() method to get 
  an integer number */

