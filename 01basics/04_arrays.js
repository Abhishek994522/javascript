// Array 

// array is an object which is used to store the elements 


// A shallow copy of an object is a copy whose properties share the same
// references (point to the same underlying values) as those Of the source
// Object from which the copy was made.


// A deep copy of an object is a copy whose properties do not share the
// same references (point to the same underlying values) as those of the
// source object from which the copy was made.


const Arr = [1,2,3,4]
//console.log(Arr);

const Heros = ["cap", "ironman","thor","hulk"]
//console.log(Heros[0]);


// Array Methods ------------------------------------------------

const myArr2 = new Array(9,4,8,3,1,7,6)
console.log(myArr2[0]);
console.log(myArr2.sort())
myArr2.push(2);
console.log(myArr2)

myArr2.pop()
console.log(myArr2)

// -------------------------------- push() and pop() -----------------------------
const myArray = new Array(1,2,3)
console.log(myArray);
myArray.push(1)
console.log(myArray);
myArray.pop()
console.log(myArray);

myArray.unshift(0)
console.log(myArray);

myArray.shift()
console.log(myArray);

console.log(myArray.includes(9));

console.log(myArray.indexOf(1))

const newArr = myArray.join()

console.log(myArray)
console.log(newArr)

console.log(typeof myArray)
console.log(typeof newArr)

// -------------------------- slice and splice 

const Arr1 = new Array(1,2,3,4,5,6)
console.log(Arr1)

console.log("performing slice");

const slice  = Arr1.slice(1,4)
console.log("after slice");

console.log(slice)

console.log("original array");

console.log(Arr1);


console.log("performing splice");

const splice = Arr1.splice(1,4)
console.log("after performing splice");

console.log(splice);

console.log("original array");


console.log(Arr1);


// slice did not change the original array 
// but
// splice change the original array


