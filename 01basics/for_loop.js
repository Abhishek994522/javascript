// for loop

// for(let i=0; i<=10 ; i++){
//     const element = i;
//     if(element == 5){
//         // console.log("5 is best number");
        
//     }
//     // console.log(element);
    
// }

// for(i=0;i<=10;i++){
//     //console.log(`outer loop value ${i}`);
    
//     for(j=0;j<=10;j++){
//         //console.log(`inner loop value ${j}`);
//         //console.log(`${i} x ${j} = ${i*j}`);
        

//     }
// }




// let myArray = ["flash","batman","superman","doomsday"]

// for(i=0;i<=myArray.length;i++)
// {
//     let element = myArray[i]
//     console.log(element);
    
// }


for(i=0;i<20;i++){
    if(i==5){
        console.log("detected 5 here");
        break;
    }
    console.log(`here are the indexes ${i}`);
    
}

for(i=0;i<20;i++){
    if(i==5){
        console.log("detected 5 here");
        continue;
    }
    console.log(`here are the indexes ${i}`);
    
}