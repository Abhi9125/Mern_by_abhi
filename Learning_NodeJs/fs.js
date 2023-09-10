// ----------------------------------------
// 1. fs module -- use for write, read, update, delete a file

const fs = require('fs');

// --------------------------------------------------------------
// 2. read file in fs module 

// a. read file synchrosnaly 

// console.log("frist")
// const readSync = fs.readFileSync('./readfile.txt', 'utf-8');
// console.log(readSync);

// // b. read file Asyn

// console.log("Second");
// fs.readFile('./readfile.txt','utf-8', (err, data) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// console.log("Third");


// c. return data in Aync --> 
// const readAync = fs.readFile('./readfile.txt','utf-8', (err, data) =>{
//     if(err){
//         console.log(err);
//     }else{
//         return data;  
//         //In the above code, even though you have a return data; 
//         // statement within the callback, it doesn't return data to the result 
//         // variable in the outer scope. As a result, result remains undefined.
//     }
// });
// console.log(readAync); //undefined 


// --------------------------------------------------------
// 3. write file in fs module 

// a. Sync way 

// fs.writeFileSync('./writefile.txt',"We want to write in this file.");

// b. Aync way 

// fs.writeFile("./writefile.txt","By default writeFileSync or writeFile overwrite the content of existing file", (error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("file writen");
//     }
// });

// fs.writeFile("./writefile.txt","By default writeFileSync or writeFile overwrite the content of existing file to awoid this we use a third argument as an object "
// ,{flag : "a"}, (error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("file written");
//     }
// });


// ------------------------------------------------------------
// 4. if we want to know the information about file so we use stats()

// a. Aync Way
// fs.stat("./writefile.txt",(err,stats) => {
//     if(err){
//         console.log(err);
//         return;
//     }else console.log(stats);
// })

// -----------------------------------------------------------
// 5. remove a file

// a. Aync way 
// fs.unlink('./removefile.txt',(err) => {
//     if(err){
//         console.log("error");
//     }else console.log("file remove done.....");
// })


// b. Sync way 
// const removefile = fs.unlinkSync("./removefile.txt");
// console.log("file remove done....");



// ---------------------------------------------------------
// 6. create a directory/folder

// a. Aync Way

// fs.mkdir('./newDirectory', (err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }else console.log("new directory created");
// });


// b. Sync Way 

// const mkdir = fs.mkdirSync('./newDirectory');
// console.log(mkdir);


// ----------------------------------------------------------
// 7. remove directory 

fs.rmdir('./newDirectory', (err) =>{
    if(err){
        console.log(err);
        return;
    }else console.log("Directory remove sucsefully");
});