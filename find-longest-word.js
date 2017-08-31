function findLongestWord(str) {
  //split sentence into strings
  arr = str.split(" ");
  longestWord = 0;
  //itterate over the array
  for (i = 0; i < arr.length; i++){
    //if the length of the current string is greater than the longestword
    if (arr[i].length > longestWord){
      //longest word is reissued
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
