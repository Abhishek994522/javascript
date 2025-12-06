// scopes 

// var a = 300 // global scope
if(true){
    // var a = 30
    const b = 60 // block scope -- code inside the block
    let c = 90

}
// console.log(a);
// console.log(b);
// console.log(c);


// function one()
// {
//     const username = "abhishek"

//     function two()
//     {
//         website = "www.youtube.com"
//         console.log(username);
        
//     }
//     console.log(website);
    
//     two()
// }
// one()

if(true){
    const uname = "abhishek"
    if(uname === "abhishek")
    {
        const website = "www.youtube.com"
        // console.log(uname + website);
        
    }
    // console.log(website);
    
}
// console.log(uname);

console.log(addOne(5)) // here we only crated a function 
function addOne(num){
    return num + 1
}

console.log(addTwo(6)); // it shows error because we put a function inside a varialble

const addTwo = function(num){
    return num + 1
}