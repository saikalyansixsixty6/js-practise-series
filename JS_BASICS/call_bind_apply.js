let name1 = {
    firstName:"Virat",
    lastName:"Kohli",
    
}

let printFullName = function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+","+state)
}
printFullName.call(name1,"Delhi","Haryana")
let name2 = {
    firstName:"Jos",
    lastName:"Buttler",
}
//function borrowing - We can functions from other objects
printFullName.call(name2,"Lancashire","UK");


//same as in call here in apply we pass the arguments as list of arguments is the only difference.
printFullName.apply(name1,["Delhi","Haryana"]);
printFullName.apply(name2,["Lancashire","UK"]);

//bind method-- bind is same as call method --create a copy of full name and bind to given object and return a function.

let printMyName = printFullName.bind(name2,"Lancashire","UK");
console.log(printMyName);//return the function
printMyName();//invokes the function