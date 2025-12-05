// ---------------------- objects part-2 ----------------------------

// there are two ways to create an object 

//const tinderuser = new Object() // 1st and this is a singleton object

const tinderuser1 = {} // this is non-singleton object 
//console.log(tinderuser)
tinderuser1.id = 1
tinderuser1.name = "hello11"
tinderuser1.email = "tinder@gmail.com"

//console.log(tinderuser1)

const newUser = {
    fullname : {
        username : {
            firstname : "abhishek",
            lastname : "Doddamani"
        }
    }
}

// console.log(newUser.fullname.username.lastname);


const obj1 = {a:"1" , b : "2"}
const obj2 = {c:"3" , d: "4"}
const obj3  = {e:"5" , f: "6"}

const obj4 = Object.assign({},obj1,obj2,obj3) // object.assign(target,source); -- merges all the sources in the target ---- {} also used as source and it also a good practice

// console.log(obj4);

// console.log(obj4 === obj1);

const obj5 = {...obj1 , ...obj2 , ...obj3} // spread operator 
// console.log(obj5);


const userdb = [
    {
        id: 1,
        name : "ab",
        email : "ab@email.com"
    },
    {
        id : 2,
        name : "xyz",
        email : "xyz@email.com"
    }
]

// console.log(userdb[1].email);


// console.log(tinderuser1);

console.log(Object.keys(tinderuser1)); // push all the objects elements into a single array so we can use it efficiently // fetches all keys
console.log(Object.values(tinderuser1));// fetches all the values
console.log(Object.entries(tinderuser1));// fetches all the values

console.log(tinderuser1.hasOwnProperty("email"));
console.log(tinderuser1.valueOf());

