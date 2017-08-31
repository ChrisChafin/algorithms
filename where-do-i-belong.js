/*Return the lowest index at which a value (second argument)
 should be inserted into an array (first argument) 
 once it has been sorted. The returned value should be a number.*/

//method you pass to .sort() to get pass the weird way it sorts
function compare(a, b){
    return a - b;
}

function getIndexToIns(arr, num) {
  // insert num into the array and sort it
  //then return the index of the num

  a = arr;

  //if the number is not already in the array
  //push it
  //else, return the index
  if (a.indexOf(num) === -1){
      a.push(num);
      a.sort(compare);
  } else {
      a.sort(compare);
  }

  console.log(a)

  console.log(
      a.indexOf(num)
  )
  return a.indexOf(num);
}

getIndexToIns([3, 10, 5], 3); 