// const temprature = 41

// if(temprature < 50){
//     console.log("less than 50")
// }else{
// console.log("greater than 50")
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`power is: ${power}`)
// }


// +++++++++++++++ truthy values +++++++++++++++++++++++++++

// const userEmail = "mail.com"

// if(userEmail){
//     console.log("got the mail");
    
// }
// else{
//     console.log("not got the mail");
    
// }


const userEmail = [1,2,3,4]

if(userEmail.length === 0){
    console.log("array is empty");
    
}
else{
    console.log(userEmail[1]);
    
}

// flasy values 
// false , 0 ,-0, BigInt 0n, "" , null , undefined, NaN


const emtyObj = {}

if(Object.keys(emtyObj).length === 0){
    console.log("empty obj");
    
}
else{
    console.log("not empty");
    
}


// nullish and coalescing operator (??): null undefined

//let val1 = null ?? 10
val1 = 5 ?? 10
console.log(val1);

// ternary operator 

// condition ? true : false       



// switch case 

const month = "may"

switch (month){
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "may":
        console.log("maych");
        break;
    case "june":
        console.log("junich");
        break;
    default:
        console.log("invalidanch");
        break;
        
        
}