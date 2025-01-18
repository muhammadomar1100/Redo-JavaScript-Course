const name = "Omar"
const repoCount = "10 " 
const age = 17

// DON'T WRITE IT LIKE THIS ITS OUTDATED 
// console.log(name + repoCount + age)

// Instead write like this

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} and I am ${age} old`);

const gameName = new String('Omar');

console.log(gameName[0]);
console.log(gameName.__proto__);

// to find the length of the word do
console.log(gameName.length);
console.log(gameName.toUpperCase());
// POSITION OF THE number 
console.log(gameName.charAt('2'));
// POSITION OF THE CHARACTER
console.log(gameName.indexOf('t'));

// to change a certain part of a url

const url = "https://muhammadomar.com/omar%40muhammad"

console.log(url.replace('%40', "-"))

// to find if a url consists of something like a letter do

console.log(url.includes('omar'))
