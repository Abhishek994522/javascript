// const arr = [1,2,3,4,5]

// for(const num of arr){
//    // console.log(num);
    
// }

// const greeting = "Hello world!"
// for(const greet of greeting ){
//     console.log(`greet in greeting ${greet}`);
    
// }



// // Maps

// const map = new Map()
// map.set('in',"india")
// map.set('usa',"united states of america")
// map.set('fr',"france")
// map.set('in',"india")

// console.log(map);

// for(const [key,value] of map){
//     console.log(key,':-',value);
    
// }



// const myObj = {
//     game1 : "NFS",
//     game2 : "GTA",
//     game3 : "CSGO"
// }

// for(const key in myObj){
//     console.log(`key is ${key} and object is ${myObj[key]}`);
    
// }
// console.log("-------------------------------------------------------------------------");

// const marray = ['java','python','jdbc','cpp','c']
// // for(const k in marray){
// //     console.log(marray[k]);
    
// // }



// //  

// // marray.forEach(function (items){
// //     console.log(items);
    
// // })

// // marray.forEach( (items) => {
// //     console.log(items);
    
// // } )

// function printMe(items){
//     console.log(items);
    
// }

// marray.forEach(printMe)


// marray.forEach( (item, index,arr)=> {
// console.log(item, index, arr) ;
// })


const progName = [
    {
        programName : "Javascript",
        programFileName : "js"
    },
    {
        programName : "Java",
        programFileName : "java"
    },
    {
        programName : "python",
        programFileName : "py"
    }
]

progName.forEach( (item) => {
    console.log(item.programFileName);
    
} )