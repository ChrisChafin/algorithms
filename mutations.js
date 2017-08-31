/*Return true if the string in the first element
of the array contains all of the letters of the 
string in the second element of the array.*/

function mutation(arr) {

    //test is testing against target
    target = arr[0].toLowerCase();
    test = arr[1].toLowerCase();

    //loop through each character in 'test'
    for (i=0; i < test.length; i++){
        //if any of them are not found, we return false
        if (target.indexOf(test[i]) < 0){
            return false;
        }
    }
    //if all are found, we exit the for loop and return false
    return true;
}

mutation(["hello", "Hello"]);