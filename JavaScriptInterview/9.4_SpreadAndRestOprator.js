// 1. Cloning object with spread operator 
const person1 = {
    name : 'adam',
    age : 25
};

const person2 = {...person1};
person2.name = 'Tom Crush'
person2.age = 35;
// console.log("person 1 age = "+ person1.age);
// console.log("person 2 age = "+ person2.age);

// 2. cloning array with spread operator
const arr1 = [4,5,6,7,8];

const arr2 = [...arr1]; // new refrence create for arr2 deep copy 

// console.log("before edit = "+ arr1[1]);
// console.log("before edit = "+ arr2[1]);

arr2[1] = 400;
// console.log("after edit = "+ arr1[1]);
// console.log("after edit = "+ arr2[1]);

//3. spread operator as a argument
// const max = Math.max(...arr2);
// console.log("Maximum in arr2 = "+max);

//4. use spread operator to adding to array or object
const person3 = { ...person1, ...person2};
console.log(person3);

const arr3 = [...arr1, ...arr2];
console.log(arr3);

