const checkArray = {
    array: [1, 2, "crane juice", true, "moonmoonboi"],
    checkInArray(array, checkFor){
        for(i = 0; i < this.array.length; i++){
            let happyburger = array[i];
            let okeydokey = checkFor;

            if(happyburger === okeydokey){
                return true;
            } 
        
        }
        return false;
    }
}

console.log(checkArray.checkInArray(checkArray.array, "crane juice"));
