// Stack (Primitive) AND Heap (Non-Primitive)

let myYotubeName = "anime_clips"
let newYtname = myYotubeName 

newYtname = "Mallikarjun talwar"

console.log(myYotubeName);
console.log(newYtname)

let userOne = {
    email: "abhish@email.com",
    upi : "abcdxyz@ybl"
}

let userTwo = userOne

userTwo.email = "abish@email.com"

console.log(userOne.email);
console.log(userTwo.email);

// in stack we always gets a copy of the data 
// if we change something in stack it will made the changes to the copy 



// in Heap we get the reference of the data 
// in Heap whenever we change , we are changing the real data 