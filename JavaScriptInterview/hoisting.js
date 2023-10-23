// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.

// Q1.------------------------------
// console.log(a);
// var ans = fun();
// console.log(ans);
// var a = 10;
// function fun() {
//   // console.log("FJP-9 rocks");
//   return "FJP-9 rocks";
// }
// console.log(greet);
// var greet = function () {
//   console.log("hello");
// }
// console.log(greet);
// console.log(a);


// Q2.----------------------------------------------------
// var a;
// function fun() {
//   console.log("FJP-9 rocks");
// }

// console.log(a);
// fun();
// a = 10;
// console.log(a);

//my definition
// acccesing of variables and functions even before they are declared


// Q.3----------------------------------
// let ka scope {} wise hota hai.
let letfruit = "apple";
var varfruit = "apple";
console.log("letfruit"+"="+ letfruit, "varfruit"+"="+varfruit); //apple,apple 
{
    let letfruit = "Banana";
    var varfruit = "Banana";
    console.log("letfruit"+"="+letfruit, "varfruit"+"="+varfruit); // Banana,Banana
}
console.log("letfruit"+"="+ letfruit, "varfruit"+"="+varfruit); //apple,Banana
//---------------Temporal dead zone--------------------
// console.log(a);
// let a = 10;
// cosole.log(b);
// var b = 100;
// console.log(x);