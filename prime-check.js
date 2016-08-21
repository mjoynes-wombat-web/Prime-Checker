function primeCheck() {
   var  number = Math.abs(Number(prompt("Please enter a number to check if it's prime.")));

   if (number === 2){                                                   //If 2 then it is a prime.
       return true;
   } else if (number <= 1){                                         //Otherwise, if less thank or equal to 1 then it's not a prime.
       return false;
   } else if (number % 2 === 0){                                //Otherwise, if it is an even number i.e. divisable by 2 then it's not a prime.
       return false;
   } else {                                                                    //Otherwise...
       var sqrt = Math.sqrt(number);                        //Find the square root of the number.
       for (var i = 3; i <= Math.floor(sqrt); i++){       //For all numbers from 3 to the square root.
           if (number % i === 0){                                   //If the number leaves 0 remainder with the current i then it's not a prime.'
               return false;
           }
       }
       return true;                                                         //If there was no previous return then it is a prime.
   }
}

console.log(primeCheck());                                      //Print out the results.