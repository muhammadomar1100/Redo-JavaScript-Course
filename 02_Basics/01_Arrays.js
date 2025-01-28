// array 
// Arrays also include prototypes only two 
const myArr = [9, 8, 7, 6]

// whenever you want to see the 1st value of your const or let or var you must type 0 instead of 1
console.log(myArr[0]);

// Array methods
// the method .push basically adds a value into your array for example

// myArr.push(7)
// console.log(myArr)

// .pop means that any last value in the array should be removed however .pop should remain empty for example
// myArr.pop()
// console.log(myArr)

// now to see if something is included or not in your array you can do

console.log(myArr.includes(9))

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr)

