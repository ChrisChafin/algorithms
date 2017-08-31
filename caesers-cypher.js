/*Write a function which takes a ROT13 encoded string 
as input and returns a decoded string.

All letters will be uppercase. 
Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.*/


//charCode for uppercase letters are 65 - 91
//Check the code
//If it's the uppercase we'll subtract 13 from it's ascii code

/*If the ascii code is less than 78, it'll get out of range when 
subtracted by 13 so we'll add 26 
(number of letters in English alphabets) to it so that after A 
it'll go back to Z */

function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

rot13("SERR PBQR PNZC");