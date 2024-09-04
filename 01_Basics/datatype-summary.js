//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "harish",
    age: 22,
}
console.log(myObj.name);


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//stack and heap 


//stack
//in stack we get copy of original value if we change it then it does not affect original because it id the copy og original

let userName = "Harish"
let newUserName = userName

newUserName = "Patil"

console.log(userName);
console.log(newUserName);




//heap
//in heap we get original reference value so if we change it then original also change

let myObj2 = {
    nameOfUser : "harish",
    ageOfUser : 21
}

let myObj3 = myObj2

myObj3.ageOfUser = 23

console.log(myObj2);
console.log(myObj3);




