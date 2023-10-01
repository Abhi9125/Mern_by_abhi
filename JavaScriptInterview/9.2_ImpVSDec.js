// is the square of the number is even

// 1. Imperative Way or Procedural Way --> line by line code ko likte hai 
const x = 4;

const xSquared = x*x;
let isEven;
if(xSquared % 2 === 0){
    isEven = true;
}else isEven = false;

console.log("Line no 12 ans = " +isEven);

// 2. Declarative --> what is the problem and it it in small code.
const isSquareEven = (x) =>((x*x)%2 === 0 ? true : false);
console.log("Line no 16 ans = " + isSquareEven(5));