const name = "abhishek"
const account = 51



console.log(name + account + "hello")

// ` ` => called as backticks it is used for string interpolation 

console.log(`hello my name is ${name} and my account is ${account}`)


// strings are also created like this using objects or methods 

const gameName = new String('Manoj')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(name.length)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('1'))

const newString = gameName.substring(1,4)
console.log(newString);

const string1 = "https://www.abhishek.com/about-mypage-look"
console.log(string1)

console.log(string1.replace("-","%1000"))