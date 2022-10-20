// 1)-----------------Normal Function ----------------------
//function definition
// function nameOfTheFunction(param1, param2) {
//     //do something
// }
//function invocation / function call
// nameOfTheFunction(arg1, arg2);
//write a function to add 2 numbers
function add(num1, num2) {
    var ans = num1 + num2
    // console.log(ans);
    return ans;
}
let res = add(3, 4);
console.log(res);


//functions are treated as first class citizens in JS 
// -> functions can be returned
// -> functions can be passed as parameters/args

// build a calculator
function calculator(operator, num1, num2) {
    if (operator == "add") {
        return function add() {
            // console.log(num1+num2);
            return num1 + num2;
        }
    }
    else if (operator == "-") {
        return function sub() {
            console.log(num1-num2);
        }
    }
}

// let retFn = calculator("add", 3, 4);
let retFn = calculator("add", 45, 46);
console.log(retFn);
let sumOfTwoNum = retFn();
console.log(sumOfTwoNum);


// 2) -------------function expression---------------------------------
var variable_name = function (params) {
    //do something
}
variable_name();
var sayHi = function () {
    console.log("hello how r u ?");
}
sayHi();
console.log(sayHi);



// 3)--------------- IIFE -> immediately invoked function-----------------
function add(a, b) { // normal function 
    return a + b;
}
var ans = add(2, 3);
console.log(ans); 
// IIFE function 
let additionIIFE = (function (a, b) {
    // console.log(a + b);
    return a + b;
})(20, 30);
console.log(additionIIFE);



// 4)--------Arrow Function----------------------------

// a. 
var arr = (a,b) => {
    let c = a + b;
    console.log(c); 
}

arr(10,40);

// b.
var arr = (a,b) => {
    let c = a + b;
    return c;
}
res = arr(10,40);
console.log(res);

// c. If statement only in one line do not use {...}
 var arr = (squ) =>squ*squ;

 res = arr(20);
 console.log (res)


//5)------Question on js info ---------------------------------
// check the age is it more than 18 or not , do it by ternary operater

function agecheker(age){
   var res = age>18 ? true : confirm('Did parents allow you?'); // ternary operater return value so create a varibale 
   return res;
}
var ans = agecheker(15);
console.log(ans);
