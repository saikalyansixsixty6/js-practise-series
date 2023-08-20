//let vs var vs const
const accountId = 2909; //cant change the value
let accountEmail = "codecult@gmail.com"; //can manipulate
var accountPassword = "7896646"; //can manipulate
accountCity = "Hyderabad"; //this gives you but it is not preferble and not a good practice

// accountId = 9088; // not allowed
accountEmail = "rtc@gmail.com";
accountPassword = 898989;
accountCity = "Mumbai";

console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
prefer not to use var because it has issues with block scope and functional scope
*/

