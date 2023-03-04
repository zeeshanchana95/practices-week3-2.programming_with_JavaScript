//const keyword

//1. The const variable MUST BE INITIALIZED
// console.log(user); //Error!
// const user;

//2. We CAN'T access the const variable before initialization
// console.log(user); //Unexpected token error
const user = "Andrew";
console.log(user);

//3. We CAN't redeclare a const variable
// user = "Anna";
// console.log(user);