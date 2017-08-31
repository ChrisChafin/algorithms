/*Drop the elements of an array (first argument), 
starting from the front, until the predicate 
(second argument) returns true.

The second argument, func, is a function you'll use 
to test the first elements of the array to decide 
if you should drop it or not.

Return the rest of the array, otherwise 
return an empty array.*/

function dropElements(arr, func) {
  // Drop them elements.
  //have to set the length because it will change
  var length = arr.length;

  for (i=0; i<length; i++){
      //if the function returns true
      if(func(arr[0])){
        //break out
        break;
      } else {
          //shift the false value out
          arr.shift();
      }
  }
  console.log(arr);
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});