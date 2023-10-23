// closure example

// function fun1() {
//   var b = 900;
//   function fun2() {
//     var a = 7;
//     function fun3() {
//       console.log(a, b, c);
//     }
//     fun3();
//   }
//   fun2();
// }
// var c = 50;
// fun1();

function fun() {
  let b = 20;
  function fun1() {
    console.log(a, b);
  }
  return fun1;
}
let a = 10;

fun()();
