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