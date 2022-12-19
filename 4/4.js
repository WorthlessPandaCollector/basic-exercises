
const myObject = {  // created myObject, which is an object!
    numberOne: null,  // properties
    numberTwo: null,
    addAllNumbers(numberOne, numberTwo) {  // function, two arguments
    
    const total = numberOne - numberTwo;  // total  
        console.log(total);     //log
    }
}

myObject.addAllNumbers(10, 6);          // run function with two arguments
