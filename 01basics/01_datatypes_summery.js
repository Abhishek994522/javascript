// ----------------------    DATA TYPES

// PRIMITIVE DATA TYPES 

/*
    String
    Number
    Boolean
    Null
    undefined
    Symbol
    BigInt

*/

// NON-PRIMITIVE DATA TYPES

/*
    Array
    Function
    Object

*/

let sName = "Abc"
let age = 23
let isLogedIn = false
let chatGpt = undefined;

const id=Symbol('123')
const anotherId=('123')

const heros = ["Hulk", "Captain", "Ironman"," Thor"];

let myobj={
    myName: "xyzabc",
    age : 39,
}

const myFunction = function()
{
    console.log("Hello world!");
};

console.log(typeof sName)
console.log(typeof (age))
console.log(typeof (isLogedIn))
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Symbol)
console.log(typeof BigInt)
console.log(typeof heros)
console.log(typeof myFunction)
console.log(typeof myobj)