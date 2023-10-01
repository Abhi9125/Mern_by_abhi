// A polyfill is a piece of code (usually JavaScript on the Web) used to 
// provide modern functionality on older browsers that do not natively support it.

// 1. Map 
// const Arr = [1,2,3,4,5];
// const SquaredArr = Arr.map(function(x){
//     return x*x;
// });

// console.log(SquaredArr);
// console.log(Arr); // their is no change in original arr.


// 2. poliyfills for map function ----
// const Arr = [1,2,3,4,5];
// function myPolyfills(arr, cb){
//     const NewArr = [];
//     for(let i = 0; i < arr.length; i++){
//         NewArr.push(cb(arr[i]));
//     }
//     return NewArr;
// }

// function SquaredArr(x){
//     return x * x;
// }
// console.log((myPolyfills(Arr,SquaredArr)));
// console.log(Arr);


// 3. poliyfills for filter function 
// const Arr = [2,4,5,6,8,9,11,12];
// console.log(Arr);
//  function myPolyfillsForFilter(arr,cb){
//     let NewArr = [];

//     for(let i = 0; i < arr.length; i++){
//         if(cb(arr[i]))
//             NewArr.push(arr[i]); 
//     }
//     return NewArr;
// }

// function isEven(x){
//     if(x%2 === 0){
//         return true;
//     }
//     return false;
// }

// console.log(myPolyfillsForFilter(Arr,isEven));

// 4. reduce
// const arr = [5,10,15,20,25];
// const reduce = arr.reduce(function )






// polyfills of reduce 
// const arr = [5,10,15,20,25,30];

// function polyfilsforreduce(arr, cb){
//     let sum = 0;
//     for(let i = 1; i < )
//     return sum;
// }

// function sum(totalsum, addval){
//     return totalsum + addval;
// }

// console.log(polyfilsforreduce(arr,sum));

