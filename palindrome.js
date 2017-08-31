
function palindrome(str) {
  //remove all space and non non-alphanumeric characters
  //then convert to lower case
  //then use this reverse function

  //matching pattern
  var re = /[\W_]/gi
  //replaceing anything that matches the pattern in no space
  cleaned = str.replace(re, "")
  //converts the above string to lowercase   
  lower = cleaned.toLowerCase();
  //reverses the lowercase string
  rev = lower.split("").reverse().join("");
  //seeing if they match
  if (rev === lower){
      console.log(true)
      return true;
  } else {
      console.log(false)
      return false;
  }
}



palindrome("eye");
