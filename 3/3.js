
array = [1,2,3,4,5];  // array of numbers

function loopSum(array) {  // function loops over the elements in array, adds them together
    let total = 0;      // declare variable to hold value after each loop.
    for (i = 0; i < array.length; i++) {  //start looping over the array

    total += array[i];     // adding the number, within the array, that the loop is on

    }
    console.log(total);     // after the for loop complets, logs the value of total;
}

loopSum(array);    // runs the function with array as an argument