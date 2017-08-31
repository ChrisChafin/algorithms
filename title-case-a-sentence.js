/*Return the provided string with the first letter
of each word capitalized. Make sure the rest of 
the word is in lower case.*/

function titleCase(str) {
  str = str.toLowerCase();
  //split the string
  str = str.split(' ');
  //itterate over the array
  for (i = 0; i < str.length; i++){
    //convert the character at index 0 to uppercase
    //and add the rest of the string back in
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  //rebuld the string
  str = str.join(" ");

  return str;
}

titleCase("I'm a little tea pot");