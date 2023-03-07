/**
 * What are template literals?
Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
 */
'Hello, World!'
"Hello, World!"

//Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  
`Hello, World!`
//The above code snippet is an example of a template string, which is also known as a template literal.
//Note: On most keyboards, the backtick character can be located above the TAB key, to the left of the number 1 key.

/**
 * Differences between a template and regular string
There are several ways in which a template string is different from a regular string.
 */
//First, it allows for variable interpolation:
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
/** 
 * Essentially, using template literals allows programmers to embed variables directly in between the backticks, without the need to use the + operator and the single or double quotes to delimit string literals from variables. In other words, in ES5, the above example would have to be written as follows:  
 * 
*/
var greet1 = "Hello";
var place1 = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals


//Besides variable interpolation, template strings can span multiple lines.
`Hello,
World
!
`

//Notice that this can't be done using string literals (that is, strings delimited in single or double quotes):  
// "Hello,
// World"


/**
 * Put simply, template literals allow for multi-line strings - something that simply isn't possible with string literals.

Additionally, the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation. 
 */
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 