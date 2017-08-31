/*Return the remaining elements of an array after chopping 
off n elements from the head.*/

function slasher(arr, howMany) {
    result = arr.slice(howMany);

    return result;
}

slasher([1, 2, 3], 2);