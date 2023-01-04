console.log("hello world");
// console.log("bye");

//variables
var firstName="Harshit";
console.log(firstName);
firstName="Mohit"
console.log(firstName)

//rules
// cannot start with number
//1name = invalid
var value1=2;
console.log(value1**2)

let first_name="harsh"
console.log(first_name);
//declare constants
const pi=3.14
// pi=8
console.log(pi)
let name="   harshit   "
console.log(name[3])
console.log(name.length)
console.log(name[name.length-4])
let newstring=name.trim()
console.log(name.length)
console.log(newstring.length)
string2=newstring.toUpperCase();
string3=newstring.toLowerCase();

console.log(string2)
//slicing
let newString=newstring.slice(0,4);
console.log(newString)

//types of operators
let age=22;
let firs_Name="harshit";
console.log(typeof age );
console.log(typeof (age+""));
age=age+""

let myStr=+"34";
console.log(typeof myStr)

let string1="harshit";
let string_2="sharma"
let fullName=string1+string_2;
console.log(fullName)
let s1="15"
let s2="5"
let S=s1+s2
console.log(+s1 + +s2)
let aboutme='my name is ${firs_Name} and my age is ${age}'
console.log(aboutme);
console.log(typeof null);
