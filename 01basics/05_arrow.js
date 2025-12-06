// Arrow function 

// const user = {
//     username : "abhishek",
//     price : 999,

//     welcomeMessage : function()
//     {
//         console.log( `${this.username} , welcome to the website`);
        
//     }
// }

// user.welcomeMessage()

// function chai(){
//     console.log(this);
    
// }
// chai()


// const chai = function()
// {
//     username: "abhi",
//     console.log(this.username);
    
// }
// chai()

// const chai = () =>
// {
//     username: "abhi",
//     console.log(this);
    
// }
// chai()

// methods to write arrow function

// const addNum = (num1,num2) => {  // if you write arrow function in {} you have to write return 
//     return num1 + num2
// }
// console.log(addNum(5,10))

// implicit return methods of arrow function 

// const addNum = (num1, num2) => (num1 + num2) // here return is not used

const addNum = (num1, num2) => ({username:"Abhishek"})
console.log(addNum(5,10))