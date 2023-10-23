// closure Example---

// 1. how work clouser
//------------------------------------------------------------------
// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();

// -----------------------------------------------------------------
// 2. changing var to let
// -----------------------------------------------------------------
// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();
// console.log(a);

// ------------------------------------------------------------------
// 3. Will inner function access outer function argument
// ------------------------------------------------------------------
// function outer(str) {
//   let a = 10;
//   function inner() {
//     console.log(a, str);
//   }
//   return inner;
// }
// outer("Hello World")(); // 10, hellp world

//----------------------------------------------------------------
// 4. will inner from closure with outest
// ---------------------------------------------------------------

// function outest() {
//   let a = 10;

//   function outer(str) {
//     let b = 20;

//     function inner() {
//       console.log(a, b, str, d);
//     }
//     return inner;
//   }
//   return outer;
// }

// let d = 50;

// outest()("Hello  Closure")();

// -----------------------------------------------------------------
// 5. what is the output of below code
// -----------------------------------------------------------------

// function outest() {
//   let a = 10;

//   function outer(str) {
//     let a = 20;

//     function inner() {
//       console.log(a, str, d);
//     }
//     return inner;
//   }
//   return outer;
// }

// let d = 50;

// outest()("Hello  Closure")();

// --------------------------------------------------------------------
// how to achive data hiding in js
// --------------------------------------------------------------------
function counter() {
  var count = 1;
  function incresment() {
    console.log(count++);
  }
  return incresment;
}

counter()();
console.log(count);
