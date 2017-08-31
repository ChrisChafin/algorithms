/*Check if a string (first argument, str) ends 
with the given target string (second argument, target). */

function confirmEnding(str, target) {

    if (str.substr(-target.length) === target){
        return true;
    } else {
        return false;
    }
}

confirmEnding("He has to give me a new name", "name");