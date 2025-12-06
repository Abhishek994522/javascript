// Immedietly Invoked Function Expression (IIFE or iife)

// we use iife for to reduce or remove the pollution of global scope ................


(function  iife(){ // named iife because function has a name 
    console.log("DB connected");
    
})();
// iife() iife do not use this or dont call the function with its name instead use ()

( () => {
    console.log(`DB Connected Two`);
    
})();

( (name) => {
    // simple iife
    console.log(`DB connected to ${name}`);
    
})("Abhi")