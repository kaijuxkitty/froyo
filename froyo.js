// create prompt for user flavor input
//put user input into arrays
//create object with key flavors
//update object with new flavor inputs
//create function

let inputFlavors= prompt('List of flavors:');
let froyo= [];
for (let i = 0; i < inputFlavors.length; i++) {
  froyo= inputFlavors.split(",");
}
console.log(froyo);

let froyoObject = {};
const froyoToObject =(froyoArray)=> {

  for (let i= 0; i<froyoArray.length; i++) {
    if (!froyoObject[froyoArray[i]]) { 
      froyoObject[froyoArray[i]]=1;
    } else { 
     froyoObject[froyoArray[i]]+=1;
    } 
  }
  return froyoObject
};

console.log(froyoToObject(froyo));


    
