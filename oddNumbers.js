var l = 1;
var r = 20;

var arr = [];

function oddNumbers(l, r) {
    for (i = l; i <= r; i++){
        if (i%2!=0){
           arr.push(i); 
        }
    }
    console.log(arr)

}

oddNumbers(l, r);



