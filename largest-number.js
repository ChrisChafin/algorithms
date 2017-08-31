/*Return an array consisting 
of the largest number 
from each provided sub-array*/

function largestOfFour(arr) {
    largestArr = [];
    for (i = 0; i < arr.length; i++){

        biggestNumber = 0;
        //for each number in the nested array
        for (j = 0; j < arr[i].length; j++){
            //if the value is bigger, assing it to BN
            if (arr[i][j] > biggestNumber){
                biggestNumber = arr[i][j];
            }
        }
        //push BN to array
        largestArr.push(biggestNumber);
    }

    return(largestArr);  
}

largestOfFour([
            [4, 5, 1, 3], 
            [13, 27, 18, 26], 
            [32, 35, 37, 39], 
            [1000, 1001, 857, 1]
            ]);