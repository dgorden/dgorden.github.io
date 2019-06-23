// get names 
function compare(nameOne,nameTwo) {
 
    //split names into arrays
    var nOne = nameOne.split(" ");
    var nTwo = nameTwo.split(" ");
   
    // get last name
    var nOneLast = nOne[nOne.length - 1];
    console.log(nOneLast);
    var nTwoLast = nTwo[nTwo.length - 1];
   
    // compare the names and return either
    // a negative number, positive number
    // or zero.
    if (nOneLast < nTwoLast) return -1;
    if (nOneLast > nTwoLast) return 1;
  //   return 0;
  }
   
  // Now let's get the string of names
  var names = []
   
  // and break them into an array
  var namesSplit = names.split(", ");
   
  // and sort the array using our compare function
  namesSplit.sort(compare);
   
  // and finally, let's see what we've got
  console.log(namesSplit);