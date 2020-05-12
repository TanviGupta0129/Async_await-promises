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
    console.timeEnd("task 1 ");
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


// let par=[]
// par.push(fileWillBePromised3)
// par.push(fileWillBePromised2)
// par.push(fileWillBePromised)
// Promise.all(par).then(function(arr)
// {
//   for(let i=0;i<arr.length;i++)
//   {
//     console.log(arr[i])
//   }
// }).catch(function(err)
// {
//   console.log(err);
// })
