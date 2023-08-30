/**
 * Date:-JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
 */

let date = new Date() //instance date 

let myCreatedDate = new Date(1999,5,24);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());


// let timeStamp = new Date("01-24-1999")
// console.log(timeStamp.toString());


let newDate = Date.now()
console.log(newDate);//time in milliseconds

let newDate1 = new Date();
let newOne = newDate1.toLocaleString("default",{
     weekday:"long"
});
console.log(newOne);


