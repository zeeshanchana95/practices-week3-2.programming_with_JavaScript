const car = {
    engine: true,
    streering: true,
    speed: "slow"
}
const sportsCar = Object.create(car) // or new car()
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log("------ for-in is unrealiable -------");
for( prop in sportsCar){
    console.log(prop);
}
console.log('Iterating over object and its prototype!');

console.log('------- for-of is reliable ----');
for (prop of Object.keys(sportsCar)){
    console.log(prop + ': '+sportsCar[prop]);
}
console.log("Iterating over object's OWN PROPERTIES only!");


/**
 * for-in loop will iterate over all of the properties of orignal object and i'ts copy, whereas
 * for of loop will only iterate over all the properties of orignal object and for duplicate, it only iterate over only those properties which duplicate object defined itself but not of orignal one.
 */