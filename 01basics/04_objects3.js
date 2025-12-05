// object de-structure

const course = {
    cname: "javascript",
    price : "999",
    cteacher:"Hitesh"
}


// course.cteacher

const  {cteacher : instructor} = course

console.log(instructor);

// ------------------------- API Talk ----------------------------------------------

/*{
    // this is json or also json is an object 
    // in json the keys are also in the string format
    // true and false are not in the string type beacause they are boolean type

    "name" : "abhishek",
    "course": "javascript",
    "teacher":"hitesh"
}
*/