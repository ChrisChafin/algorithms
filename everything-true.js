/*Check if the predicate (second argument) is truthy 
on all elements of a collection (first argument).

Remember, you can access object properties through 
either dot notation or [] notation.*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  var count = 0;

  for(i=0; i<collection.length; i++){
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
        count++;
    }
  }
  //this will be false if there is a false in the collection
  //because the lengths will not match
  return count == collection.length;
}

truthCheck(
    [{"user": "Tinky-Winky", "sex": "male"},
     {"user": "Dipsy", "sex": "male"},
     {"user": "Laa-Laa", "sex": "female"},
     {"user": "Po", "sex": "female"}]
     , "sex");
