// -------------------------------- Arrays Part-2 --------------------------------

const marvel_heros = ["ironman" , "thor" , "captain America"]

const dc_heros = ["Batman", "superman" , "Flash"]

// marvel_heros.push(dc_heros)

// //console.log(marvel_heros)
// console.log(marvel_heros[3][0])

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// ------------------- spread operator 

// const new_heros = [...dc_heros , ...marvel_heros]
// console.log(new_heros);

const another_array = [1,2,3, [4,5,6],7,8,[1,2,3,[4,5,[6,7,8,[9,1]]]]]
const new_another_array = another_array.flat(Infinity) // flat merges all array elements in one 
console.log(new_another_array);


console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));

console.log(Array.from({name:"Hello"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

