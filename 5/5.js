


 
// testing prompt
// async function enterLoop() {



//     const prompt = await prompt("Enter the sentance you want to change to lowercase:");
//     const originalText = [prompt];

 
const originalText = {      
    string: ["I'm A rEtArD", "tWo"]       // creating an object, and then storing it in an array
}   
    
    for(i = 0; i < originalText.string.length; i++) {  // running loop over the array
        let text = originalText.string[i].toLowerCase();      // creating const to hold string in object;  
        console.log(text);  // log
    }
// }

// enterLoop();



