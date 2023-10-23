// --------------------------------------------------------------
// 1. Example of setTimeout() --
// ---------------------------------------------------------------
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste react");
// }
// x();

// ----------------------------------------------------------------
// 2. A example of setTimeout -- to print 1,2,3,4,5 each after 1sec
// -----------------------------------------------------------------
// function x() {
//   for (var i = 1; i < 6; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("setTimeout working");
// }

// x();
//output--
// 6
// 6
// 6
// 6
// 6

// -------------------------------------------------------------------------
//3. To resolve this problen we use let the place var bcz let is block scope
// -------------------------------------------------------------------------
// function x() {
//   for (let i = 1; i < 6; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("setTimeout working");
// }
// x();

// --------------------------------------------------------------------------
// 4. Do this Q with var
// -------------------------------------------------------------------------

function x() {
  for (var i = 1; i <= 5; i++) {
    function timer(a) {
      setTimeout(function () {
        console.log(a);
      }, a * 1000);
    }
    timer(i);
  }
}

x();
