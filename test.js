
var arr = [
            {id:4, val: 0},
            {id:1, val: 0},
            {id:3, val: 0}, 
            {id:1, val: 1}
            ];


function test(arr, propertyName) {
    var newArr = [];            
    var firstIndex = "";
    var secondIndex = "";

    for (a = 0; a < arr.length; a++) {
        for (b = a+1; b < arr.length; b++) {
            if (arr[a].id === arr[b].id){

                firstIndex = arr.indexOf(arr[a]);
                secondIndex = arr.indexOf(arr[b]);

                if (firstIndex < secondIndex){
                    break;
                } else {
                    newArr.push(arr[a])
                }
            }else {
                newArr.push(arr[a])
                break;
            }
        }
    }
    return newArr;
}


test(arr, 'id');

