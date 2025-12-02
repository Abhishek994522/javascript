
// -------------------------------------------------Type conversion -------------------------------------------------------

let score = "33abc"

console.log(typeof score)

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN - Not a Number --  type of a NaN is a Number 
// true => 1
// false => 0


let isLogedIn = 1;
let booleanIsLogedIn = Boolean(isLogedIn)
console.log(booleanIsLogedIn)

// "" => false 
// "abc" => true


let aNumber = 33
let convertingNumberToString = String(aNumber)
console.log(convertingNumberToString)
console.log(typeof convertingNumberToString)


// ---------------------------------------- OPERATIONS --------------------------------------------

console.log(1+2)
console.log(4-3)
console.log(2*3)
console.log(2/2)
console.log(12%3)

let str1 = "ahaan"
let str2 = " ayan"
let str3 = str1 + str2
console.log(str3);


console.log("1"+2)
console.log(1+"2")
console.log("1" + 2 + 2)
console.log(1+2+"2")


let num1, num2, num3 
num1= num2= num3=4
console.table([num1,num2,num3])

let randomNumber = 10
let prefixNumber = ++randomNumber // prefix => increment first then show result
console.log(prefixNumber)

let postfixNumber = randomNumber++ // show result then increment
console.log(postfixNumber)


