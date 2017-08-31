/* Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
    joinedArr = [];

    //i is where we start the slice
    //i + size is where we end
    for (i=0; i < arr.length; i+=size){
        //this ensures the slice section always moves
        arr2 = (arr.slice(i, i+size));

        joinedArr.push(arr2);
    } 

    return joinedArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);