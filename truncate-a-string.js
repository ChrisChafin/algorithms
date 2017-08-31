/*Truncate a string (first argument) if it is longer than 
the given maximum string length (second argument). 
Return the truncated string with a ... ending.
However, if the given maximum string length num is less than 
or equal to 3, then the addition of the three dots does not add 
to the string length in determining the truncated string.*/

function truncateString(str, num) {
  elip = "...";
  if (str.length > num){
      if (num > 3){
          str = str.slice(0, num -3) + elip;
          console.log(str)
          return str;
      } else {
          str = str.slice(0, num) + elip;
          console.log(str)
          return str;
      }
  } else {
      console.log(str)
      return str;
  }
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);