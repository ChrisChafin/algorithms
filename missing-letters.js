/*Find the missing letter in the passed letter range 
and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  for (i=0; i<str.length; i++){
      // code of current character
      var code = str.charCodeAt(i);

      if (code !== str.charCodeAt(0) + i) {
          // find previous char and return
          return String.fromCharCode(code - 1);
      }
  }
  return undefined;
}

fearNotLetter("abce");