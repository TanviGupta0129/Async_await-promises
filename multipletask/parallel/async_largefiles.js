//   // parallel
// // f1 => read 
// // f2 => read
// let fs = require("fs");
// console.time("task1");
// fs.readFile("../../f1.txt", function (err, data) {
//   console.log(data.byteLength);
//   console.timeEnd("task1");
// })
// // synchronous wait 
// let ft = Date.now() + 10 * 1000;
// while (Date.now() < ft) {
// }
// console.time("task2");
// fs.readFile("../../f1.txt", function (err, data) {
//   console.log(data.byteLength);
//   console.timeEnd("task2");
// })
// console.time("task3");
// fs.readFile("../../f1.txt", function (err, data) {
//   console.log(data.byteLength);
//   console.timeEnd("task3");
// })

// => main work finish //=? async work will not start => 
//*********************************************************
// let fs=require("fs");
// console.time("task1");


let fs=require("fs");
function promisify(path){
let fileWillBePromised= new Promise(function(resolve,reject){
  fs.readFile(path,function(err,data){
    if(!err){
      resolve(data);
    }
    else{
      reject(err);
    }
    })
  })
return fileWillBePromised;
}
let fileWillBePromised3=promisify("../../f1.mp4");
fileWillBePromised3.then(function(data){
  console.time("task 1 ");
    console.log(data.byteLength);
    console.timeEnd("task 1");
}).then(function(){
  let ft = Date.now() + 10 * 1000;
  while (Date.now() < ft) {
  }
})
let fileWillBePromised=promisify("../../f1.txt");
fileWillBePromised.then(function(data){
  console.time("task 2 ");
    console.log(data.byteLength);
    console.timeEnd("task 2 ");
})
let fileWillBePromised2=promisify("../../f2.txt");
fileWillBePromised2.then(function(data){
  console.time("task 3 ");
  console.log(data.byteLength);
  console.timeEnd("task 3 ");
}).catch(function(err){
  console.log(err);
})
