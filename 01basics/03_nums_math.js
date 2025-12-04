const score = 501
console.log(score)

const newNumber = new Number(550)
console.log(newNumber);

console.log(newNumber.toString());

console.log(newNumber.toFixed(4)) // best for e-commerce application development

const anumber = 100.985

console.log(anumber.toPrecision(3));

const numbers = 10000000
console.log(numbers.toLocaleString('en-in'));


// ---------------------------------------------------------

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(4.6));
console.log(Math.round(4.4));

console.log(Math.min(4,3,2,1,0));


console.log(Math.random()*10 + 1)

console.log(Math.round(Math.random()*10 + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 ))+ min)