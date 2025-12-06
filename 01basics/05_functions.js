// function

// function function_name (){
//     .... code...
// }
// function keyword    function_name()  code inside function 
function myName (){
    console.log("hello world")
}

// reference, ()=> execution
// myName();

// function addTwoNumbers(num1,num2){  // function addTwonumbers(parameters)
//     console.log(num1 + num2);
     
// }
// const result = addTwoNumbers(5,6) // addTwonumbers(arguments)


function addTwoNumbers(num1,num2){  // function addTwonumbers(parameters)
    // let result = num1 + num2
    // return result     
    return num1 + num2
    console.log("Hello"); // it will not execute because in function it should not execute the code which will written after the return ....
    
}
const result = addTwoNumbers(5,6)
// console.log("result :",result);

function loginUserMsg(username){
    if(!username){
        console.log("please enter a username");
        return
        
        
    }
    return `${username} just logged in `
}

// console.log(loginUserMsg("abhishek"))

// ...num is a Rest operator -- it is same as spread operator which merges all the data into a single array
function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(200,500,6000,10));

// function calculateCartPrice1(val1,val2, ...num){
//     return num
// }
// console.log(calculateCartPrice1(200,500,6000,10));

const user = {
    username : "Abhishek",
    price : 100000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user) // passing through function

// handleObject({ 
//     // passing though object
//     username: "sam",
//     price : 299
// })

// passing through Array

const newArray = [100,20,400,50,700]

function returnArrayValue(myArray){
    return myArray[1]
}
// console.log(returnArrayValue(newArray));
// console.log(returnArrayValue([100,200,300,40]));



// ============================================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++

