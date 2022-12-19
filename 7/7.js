// declare object with single property, clothes[empty array]

const myObject = {  // declared myObject, with single property 'clothes'
    clothes: [],  // clothes, empty array
    putOnClothes(newClothes) {  // wrote function putOnClothes, single argument, clothes we are gonna put on
        myObject.clothes.push(newClothes); // push to clothes array, the argument newClothes
    }
}

myObject.putOnClothes("hat");  // run function with "hat" as the argument newClothes

console.log(myObject.clothes);  // log out the object


// write a function in the object called putOnClothes that takes an argument -- 
// an item of clothes that you want to put on -- in a string e.g. "hat"
//if object is already wearing clothing entered, throw error
// otherwise add the clothes to the array
// log out the new clothes array
