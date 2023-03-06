// // inheritance in JavaScript is based around the prototype object.
// //All objects that are built from the prototype share the same functionality.
// //When you need to code more complex OOP relationships, you can use the class keyword and its easy-to-understand and easy-to-reason-about syntax.
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
// }
// /**
//  * Essentially, this is all the code that you need to write to achieve two things: 

// This code allows me to build new instances of the Train class. 

// Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.
//  */

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);



// //You can also add methods to classes, and these methods will then be shared by all future instance objects of my Train class.
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }
// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// //It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.
// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLigths();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);




class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}





class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

