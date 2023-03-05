/**
 * OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

Allows you to write modular code,

Makes your code more flexible and

Makes your code reusable.
 */


class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)
console.log (Animal)



class Animal { /* ...class code here... */ }
var myDog = new Animal()
console.log (Animal)




/**
 * OOP Principles: Inheritance
Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

There is a base class of a "thing".

There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.
 */

class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }


//Abstraction
//Abstraction is all about writing code in a way that will make it more generalized.

//Encapsulation
//In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
"abc".toUpperCase();

//polymorphism
//Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
