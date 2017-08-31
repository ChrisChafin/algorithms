/*Create a function that looks through an array 
(first argument) and returns the first element 
in the array that passes a truth test (second argument).*/

function findElement(arr, func) {
  //
  var num;

  for (i=0; i<arr.length; i++){
      if(func(arr[i])) {
          //assign the element that passes to num
          num = arr[i];
          return num;
      } //will return 'undefiend' if false
  }
  return num;
}

findElement([1, 3, 5, 8, 9, 10], 
            function(num){ return num % 2 === 0; });