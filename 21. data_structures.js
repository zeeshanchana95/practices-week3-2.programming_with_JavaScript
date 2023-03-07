/**
 * Working with arrays in JavaScript
 * 
 * In this reading, the focus is on three specific methods that exist on arrays:
    forEach 
    filter
    map
 */
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
//To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

//Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
});


/**
 * The filter() method
Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.
 */
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

/**
 * The map method
 * 
    Finally, there's a very useful map method. 
    This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
 */
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
//As already discussed, choosing a proper data structure affects the very code that you can write. This is because the data structure itself comes with some built-in functionality that makes it easier to perform certain tasks or makes it harder or even impossible without converting your code to a proper data structure.

/**
 * Working with Objects in JavaScript
 * The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:
 */
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result);


/**
 * Working with Maps in JavaScript
To make a new Map, you can use the Map constructor: new Map();

A map can feel very similar to an object in JS. However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
 */
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//To get a specific value, you need to use the get() method. For example:  
bestBoxers.get(1); // 'The Champion'



/**
 * Working with Sets in JavaScript
A set is a collection of unique values.
To build a new set, you can use the Set constructor:new Set();

The Set constructor can, for example, accept an array.
This means that we can use it to quickly filter an array for unique members.
 */
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);