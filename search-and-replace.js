/*Perform a search and replace on 
the sentence using the arguments 
provided and return the new sentence.

First argument is the sentence to 
perform the search and replace on.

Second argument is the word that 
you will be replacing (before).

Third argument is what you will be 
replacing the second argument with (after).*/

function myReplace(str, before, after) {
  //sorting the arguments
  var args = Array.prototype.slice.call(arguments);

  //check for uppercase
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
      args[2] = args[2].charAt(0).toUpperCase() + args[2].slice(1);
  }

  rep = str.replace(args[1], args[2])

  console.log(rep)
  return rep;

}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");