// ---------------------------------------------------------------
// Example -- 1
// --------------------------------------------------------------

// let a = 10;
// {
//   let b = 20;
//   {
//     let c = 30;
//     console.log(c);
//   }
// }
// console.log(a);

// ---------------------------------------------------------------
// Example -- 2
// ---------------------------------------------------------------

let a = 10;
{
  var b = 100;
  let a = 500;
  console.log(a);
}
console.log(a);
