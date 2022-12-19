// declare a function that checks if an element is in an array

array = ["this", 1, 3, "crane"];   // our array

function findInArray(array, search) {  // function with two arguments
    for (let i = 0; i < array.length; i++) {  // loop over array 
        if (search === array[i]){           // if our ssearch argument equas our array[i]
            return true;            // return true
            } 

        }
        return false;               // return false if it didn't find truth during if statement
    
 }


console.log(findInArray(array, 1));                            // lawg
console.log(findInArray(array, 23423));
console.log(findInArray(array, "TIMMMMAY"));
console.log(findInArray(array, "crane"));






// it takes two arguments, the array, and the element to look for

// if element is found, return true, other false