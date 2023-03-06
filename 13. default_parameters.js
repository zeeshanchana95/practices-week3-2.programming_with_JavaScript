/**
 * Default Parameters
A useful a ES6 feature allows me to set a default parameter inside a function definition  First, .
What that means is, I'll use an ES6 feature which allows me to set a default parameter inside a function definition, which goes hand in hand with the defensive coding approach, while requiring almost no effort to implement.
 */

//function without default parameter set
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams(); // Result: NaN

//function with default parameter
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams(); // Result: 100



//This now allows me to code my classes in a way that will promote easier object instantiation.
//Consider the following class definition:
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var fail = new NoDefaultParams(1,2,3,false);
console.log(fail.calculate()); // 'The value of bool1 is incorrect'


//However, now that you know about default parameters, this example can be improved as follows:
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6