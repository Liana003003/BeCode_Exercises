//A recursive function is a function that calls itself during its execution
//Factorial of n is defined as 1 x 2 x … x n. For n = 0, factorial is 1
/*Ex: Input: n = 5
      Output: 120
      Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120*/

      const prompt = require('prompt-sync')();

      function factorial(n)
      {
        //The lowest number whose factorial can be calculated is 0. The factorial of 0 is 1
          if (n === 0)
              return 1;
            //To get the factorial of a number you multiply that number in descending order
          return n * factorial(n - 1);
      }
      
      let userNumber = prompt("Give me a number you want to know the factorial of.")
      console.log("The factorial of the number you gave is "
                  + factorial(userNumber));     