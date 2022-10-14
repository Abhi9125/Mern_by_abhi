//declaring an arr
var cars = [];


//declaring+initializing arr
var cars = ["BMW", "AUDI", "HONDA", 1, 2, 4, true, undefined];
//printing an array
console.log(cars);

//aceesing elements in an array 
console.log(cars[3]);
console.log(cars[0]);

//replacing elements
cars[3] = "Mahindra";
console.log(cars[3]);

//adding elements in arr
cars[8] = "Maruti";
console.log(cars);


// interview Q
cars[23] = "hello";
console.log(cars.length);
console.log(cars);

//Methods
cars.pop();
console.log(cars);
console.log(cars.length);

cars.push("Mustang");

// unshift-> add element at the starting of arr
cars.unshift("TATA");
console.log(cars);
console.log(cars[0]);

// shift-> it removes element from start of an arr

cars.shift();
// console.log(cars);
console.log(cars);

cars.length = 3;
console.log(cars);

// at -> use to get element at last
let name = ["abhi","akhand","satyam","sandi"];
console.log(name.at(-1))

//  Arrow Function

// 1. 
var arr = (a,b) => {
    let c = a + b;
    console.log(c); 
}

arr(10,40);

// 2.
var arr = (a,b) => {
    let c = a + b;
    return c;
}
res = arr(10,40);
console.log(res);

// 3. If statement only in one line do not use {...}
 var arr = (squ) =>squ*squ;

 res = arr(20);
 console.log (res)







