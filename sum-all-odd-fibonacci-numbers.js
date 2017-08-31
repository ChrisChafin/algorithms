/*Given a positive integer num, return the sum of 
all odd Fibonacci numbers that are less than or equal to 
num.

The first two numbers in the Fibonacci sequence 
are 1 and 1. Every additional number in the sequence is 
the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence 
are 1, 1, 2, 3, 5 and 8.*/

function sumFibs(num) {
  var prev = 0;
  var current = 1;
  var result = 0;

    while (current <= num){
    //if current is odd
        if (current%2 !== 0){
            result += current;
        }
        current += prev;
        prev = current - prev;       
    }
  console.log(result);
  return result;
}

sumFibs(4);
sumFibs(1000)