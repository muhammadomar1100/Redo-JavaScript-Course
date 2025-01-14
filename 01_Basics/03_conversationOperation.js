// when you put the letters in double quotes it will be a typeof string whereas without double quotes it will be a number
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1
//false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);