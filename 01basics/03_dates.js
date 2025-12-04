// Date

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());


let date = new Date(2024,1,28)
console.log(date.toDateString()); // in javascript Months starts from 0 -- means 0 => january 

let date1 = new Date("2024-01-28")
console.log(date1.toDateString())   //  here date starts from 1 


let myTimestamp = Date.now()
console. log (myTimestamp) ;
console. log (date1.getTime()) ;
console. log (Date.now());

console.log(Math.floor(Date.now()/1000));

// newDate().toLocaleString('default',{
//     weekday: "long"
    
// })