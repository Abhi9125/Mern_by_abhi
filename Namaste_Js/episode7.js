// -----------------Case -- 1------------------------
// function a() {
//   console.log(b);
// }

// var b = 10;
// a();

// --------------Case -- 2---------------------------
// function a(){
//     c();
//     function c(){
//         console.log(b); //10
//     }
// }

// var b = 10;
// a();

// --------------Case -- 3 --------------------------

function fn1() {
  var a = 20;
  fn2();
  function fn2() {
    var b = 100;
    console.log(b); //100
    console.log(a); //20
    console.log(c); //50
  }
}
var c = 50;
var b = 10;
fn1();
console.log(b);

// -------------Case --4 ----------------------------

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b); //10
//   }
// }

// a();
// console.log(b); // Error, Not found
