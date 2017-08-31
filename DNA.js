/*The DNA strand is missing the pairing element. 
Take each character, get its pair, and return 
the results as a 2d array.

Base pairs are a pair of AT and CG. 
Match the missing element to the provided character.

Return the provided character as the first element 
in each array.

For example, for the input GCG, 
return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in 
an array, and all the arrays are grouped 
into one encapsulating array.*/

/*
Flowchart
1. Each letter goes into an array
2. Compare each in first array to a match
3. for each in first array make array with pair
*/

function pairElement(str) {
  arr = [];
  replace = ["G", "C", "A", "T"];
  newStr = str.split('')
  for (i=0; i<newStr.length; i++){
    pair = [];
    pair.push(newStr[i]);
    
    switch (newStr[i]){
      case "G":
        pair.push(replace[1]);
        break;
      case "C":
        pair.push(replace[0]);
        break;
      case "A":
        pair.push(replace[3]);
        break;
      case "T":
        pair.push(replace[2]);
        break;        
    }
    
    arr.push(pair);
  }
  console.log(arr)
  return arr;
}

pairElement("GCG");