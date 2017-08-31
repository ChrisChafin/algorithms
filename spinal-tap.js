/*Convert a string to spinal case.
Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  //create a regex for all white spaces and underscores
  //convert the string to lower case
  /*The tricky part is getting the regular expression 
  part to work, once you do that then just turn the 
  uppercase to lowercase and replace spaces with 
  underscores using replace().*/
  
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  str = str.replace(regex, "-").toLowerCase();

  console.log(str)
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")