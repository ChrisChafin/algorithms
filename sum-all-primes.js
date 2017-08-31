/*Sum all the prime numbers up to and including 
the provided number.

A prime number is defined as a number greater 
than one and having only two divisors, one and 
itself. For example, 2 is a prime number because 
it's only divisible by one and two.*/

function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        //Shifts a in binary representation b (< 32) bits 
        //to the left, shifting in zeroes from the right.
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  console.log(res)
  return res;
}

sumPrimes(10);