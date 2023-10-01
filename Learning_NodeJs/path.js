// ---------------------------------------------------
// 1. path -- includes methods to deal with file paths.

const path = require("path");

// console.log(__filename); // give root to current file path
// console.log(__dirname); // gine root to current directory path

// console.log(path.basename(__filename)); // return current working file name with extension

// console.log(path.basename(__dirname)); //retrurn current working directory


// console.log(path.extname(__filename)); // return exetention of curre working file
// console.log(path.extname(__dirname)); //return 


// console.log(path.join('/hello1','/hello2','index.js'));
// console.log(path.join('hello1','hello2','index.js'));
// console.log(path.join('hello1','//hello2','index.js'));
// console.log(path.join('hello1','hello2','/index.js'));
// console.log(path.join('/hello1','/hello2','../index.js')); //skip the hello2 directorry



console.log(path.resolve('hello1','hello2','index.js'));  // return absulute path from root  
console.log(path.resolve('/hello1','hello2','index.js')); // return absulute path from hello1 bcz 1
console.log(path.resolve('hello1','//hello2','index.js'));
console.log(path.resolve('hello1','hello2/','/index.js'));
console.log(path.resolve('hello1','hello2','../index.js')); 


console.log(path.parse(__filename)); //return an object jo diffrent property dega

