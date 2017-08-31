/*We'll pass you an array of two numbers. 
Return the sum of those two numbers and 
all numbers between them.

The lowest number will not always come first. */

function sumAll(arr) {
    temp = 0;
    min = Math.min(arr[0], arr[1])
    max = Math.max(arr[0], arr[1])

    for(i = min; i <= max; i++){
        temp += i;
    }

    return temp;

}

sumAll([1, 4]);