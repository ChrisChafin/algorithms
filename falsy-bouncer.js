/*Remove all falsy values from an array.
Falsy values in JavaScript are 
false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {
    //use .filter() to filter out false Boolean values
    bounced = arr.filter(Boolean)
    return bounced;
}

bouncer([7, "ate", "", false, 9]);