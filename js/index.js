// Iteration 1: Names and Input
const hacker1 = "Doug"
console.log (`The driver's name is ${hacker1}`)

const hacker2 = "Bia"
console.log (`The navigators's name is ${hacker2}`)

//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(hacker1.length)
    console.log(hacker2.length)
}

if (hacker1.length > hacker2.length) {
console.log (`The driver's has the longest name, it has ${hacker1.length}.`) 
}

if (hacker1.length > hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

if (hacker1.length > hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length+hacker2.length} characters!`)
}
// Iteration 3: Loops


const Names= hacker1.toUpperCase().split('').join(' ');
console.log (Names);

const driver= hacker2.toString().split('').reverse().join('');
console.log (driver)

