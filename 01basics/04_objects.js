// singleton
// object.create 

// objects --  there are two ways to create a object
// 1) object literals
// 2) object constructor

// object literals

const mySym = Symbol("key1")

const myuser = {
    name : "abhishek",
    age : 23,
    email : "abhishek@email.com",
    isLoggedIn : false,
    [mySym] : "mykey1" // use [] for symbols

}
// console.log(myuser.email);
// console.log(myuser["email"])

// console.log(myuser[mySym]);

// // Object.freeze(myuser)
// myuser.email = "nagraj@gmail.com"

// console.log(myuser);


myuser.greeting = function()
{
    console.log("Hello welcome to the 21st century");
    
}

console.log(myuser.greeting);
console.log(myuser.greeting());

myuser.greeting2 = function()
{
    console.log(`hello , ${this.name}`);
    
}

console.log(myuser.greeting2());
console.log(myuser.name);

