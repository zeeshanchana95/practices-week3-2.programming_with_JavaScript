//For of loops and objects

/**
 * const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}  //Uncaught TypeError: car is not iterable
 */


const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
/**
 * output:
red
orange
yellow
 */

/**
 * Before you can properly answer this question, you first need to review three built-in methods: Object.keys(), Object.values(), and Object.entries().
 * Built-in methods
The Object.keys() method
The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the Object.keys() method.
 */
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


//The Object.values() method
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


//The Object.entries() method
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));


//Examples
//You now have all the ingredients that you need to loop over any object's own property keys and values.
// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( key of Object.keys(clothingItem) ) {
//     console.log(keys, ":", clothingItem[key])
// }



function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();