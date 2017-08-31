// Define a repeatify function on the String object. 
//The function accepts an integer that specifies how many times the string has to be repeated. 
//The function returns the string repeated the number of times specified

String.prototype.repeatify = String.prototype.repeatify || function(times) {
    var str = '';

    //for as long as i is less than the number of times provided
    //concatenate 'this' onto the str
    for (var i = 0; i < times; i++) {
        str += this;
    }
    //return the str
    return str;
};

// we appended this to the String object
//So it will repeat the String we are providing
console.log('hello'.repeatify(3))