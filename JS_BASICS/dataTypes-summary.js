/**
 *PRIMITIVE DATATYPES
 * 1.String
 * 2.Number
 * 3.BigInt
 * 4.Boolean
 * 5.null(type of null is object)
 * 6.undefined
 * 7.Symbol(to make any component unique)
 * 
 */
 let string1 = "kalyan";
 let bigint = 7383962303694939303874673837673n;
 //console.log(typeof bigint);
 let empty = null;
 //symbol -- Is is used to define a value to be unique
 let symbol = Symbol(73883);
 let symbol2 = Symbol(73883);
 console.log(symbol === symbol2)
 
 
 
 /**
  * REFREENCE DATATYPES
  * 1.Arrays (type of Arrays is "object")
  * 2.objects (type of objects is "object")
  * 3.functions (type of functions are also "object")
  * 
  * 
  */
 const myArray = ["ViratKohli","RohitSharma","HardikPandya"]
 let ele = myArray[0]
 //console.log(typeof myArray);
 
 //object = object are key value pairs enclosed with curly braces, value can be value,string,number,array,object,function
 let myObj = {
     name:"kalyan",
     age:24,
     location:"Hyderabad"
 }
 
 var myFunction = function (){
     console.log("Ee sala cup namde")
 }
 myFunction()


 //++++++++++++++++++++++++++++++++++++++++++++++++

 /*
 Two types of memories:
 1.stack
 2.heap
 1.stack memory -- primitive datatype values are stored in stack memory.
 */
//example
let myName = "sai kalyan";
let myName2 = myName; // here myName is shares only copy of its value to myName2
myName2 = "sai kalyan rohit"
console.log(myName) 
console.log(myName2)

/**
 2.heap -- Reference data types are stored in heap memory
 */
//example-:
let obj1 = {
    name:"kalyan",
    email:"sai234@gmail.com"
}

let obj2 = obj1;// here obj2 is refer the value to obj1
obj2.email = "kalyan234@gmail.com"

console.log(obj1)
console.log(obj2)
/**
 * here in both console logs obj1,obj2 prints same output the objects points to the same reference value
 */