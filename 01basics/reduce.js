const myNum = [1,2,3,4]

// const numTotal = myNum.reduce( function (acc,curval){
//     console.log(`accumulator: ${acc} and current value is: ${curval}`);
    
//     return acc + curval;
// },0)
// console.log(numTotal);

const myTotal = myNum.reduce( (acc,curval) => acc+curval,0)

console.log(myTotal);
