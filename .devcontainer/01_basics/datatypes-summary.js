// primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

// const bigNumber = 21132333449339n



// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);



// ***********************************************************

// Stack (primitive), Heap (non-primitive)

let myYoutubename = "hiteshsuthardotcom"

let anothername = (myYoutubename);
anothername = "Chaiourcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com"

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



