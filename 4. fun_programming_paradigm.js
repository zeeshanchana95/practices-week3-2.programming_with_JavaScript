/**
 * Functional Programming Paradigm:
 * When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
 * Example:
 */
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

/**
 * Object-oriented Paradigm:
 * Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.
 */
//In OOP, methods update properties stored in the object instead of generating new return values.

//Example: 
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".



/**
 * There are many more concepts and ideas in functional programming.

    1. Here are some of the most important ones:

    2. First-class functions

    3. Higher-order function

Pure functions and side-effects
 */

/**
 * First-class functions
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:
    pass to other functions
    save in a variable
    return from other functions
In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.
 */
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())


/**
 * Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:
    It accepts other functions as arguments
    It returns functions when invoked
There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.
 */
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number   


/**
 * Pure functions and side-effects
    Another concept of functional programming are pure functions.
    A pure function returns the exact same result as long as it's given the same values.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.
This includes: 
    changing variable values outside of the function itself, or even relying on outside variables 
    calling a Browser API (even the console itself!) 
    calling Math.random() - since the value cannot be reliably repeated
 */
    function addTwoNums(a, b) {
        console.log(a + b)
    }
    addTwoNums(5,6); // 11