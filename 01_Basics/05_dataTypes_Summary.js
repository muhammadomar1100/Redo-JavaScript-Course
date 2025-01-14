// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456494094822342459n

// Reference (Non Premitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "Muhammad",
    age: "16",
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);