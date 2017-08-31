/*Create a function that sums two arguments together.
 If only one argument is provided, then return a function
  that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and
 addTogether(2) should return a function.

Calling this returned function with a single argument 
will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined*/

function addTogether() {
  /*This is what the function needs to do
    add two numbers passed as parameters and return the sum.

    check if any of the numbers are actual numbers, 
    otherwise return undefined and stop the program 
    right there.

    check if it has one or two arguments passed. 
    More are ignored.
    
    If it has only one argument then it has to 
    return a function that uses that number and 
    expects another one, to then add it.
    */

    if (arguments.length > 1){
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined){
            return undefined;
        } else {
            console.log(a + b)
            return a + b;
        }
    } else {
        var c = arguments[0];

        if (checkNum(c)) {
            //function that requires a second argument
            return function(arg) {
                if (c === undefined || checkNum(arg) === undefined){
                    return undefined;
                } else {
                    console.log(c + arg)
                    return c + arg;
                }                
            };
        }
    }

    function checkNum(num) {
        if (typeof num !== "number"){
            return undefined;
        } else {
            return num;
        }
    }
}

addTogether(2,3);