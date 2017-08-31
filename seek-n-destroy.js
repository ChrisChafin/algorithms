/*You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are 
of the same value as these arguments.*/

function destroyer(arr) {
  // Remove all the values
  //filter out arguments[1] and arguments[2]

  //converting to real array
  var args = Array.prototype.slice.call(arguments);

  //for each value in the first array
  //remove if it matches args[1] || args [2]
  for(i=0; i < arr.length; i++){
    for(j=0; j < args.length; j++){
      if (arr[i] === args[j]){
        delete arr[i];
      }
    }
  }
  console.log(arr.filter(Boolean))
  //filters out null values
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);