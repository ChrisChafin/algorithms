/*Flatten a nested array. You must account for varying 
levels of nesting.*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var finalArray = [];
  var j = 0;
  
  function flatten(arg) {
      //if false, push to finalArray
      if (!Array.isArray(arg)){
            finalArray.push(arg)
      } else {
          //if true, call the function again
          //for each element in the argument array
          for (var a in arg) {
              flatten(arg[a]);
          }
      }
  };

  arr.forEach(flatten);
  console.log(finalArray)
  return finalArray;
}

steamrollArray([[["a"]], [["b"]]]);
