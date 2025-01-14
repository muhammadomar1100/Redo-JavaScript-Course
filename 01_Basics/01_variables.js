
// const means that it shouldn't be or cannot be changed it is remained as it is for example if the const value is set to smth like 99999 and then you say a value of 2 the code won't accept it
const accountId = 9999
let accountEmail = "omar@gmail.com"
var accountPassword = "123456789"
let accountState;

accountCity = "Lahore"
accountEmail = "om@google.com"
accountPassword = "9876"

// accountId = 2 // not allowed

/*
Prefer not to use var because of issue in block scope and functional scope only use let or const
*/


console.log(accountId);

// Instead of doing console.log for every single value you can just use console.table and list all of the things you want printed
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


