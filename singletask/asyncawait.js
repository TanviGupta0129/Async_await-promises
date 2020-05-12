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
console.log("Started Executing file");
console.log("Cpu is stuck till file is read");
let fileWillBePromised=promisify("../f1.mp4");
fileWillBePromised.then(function(data){
    console.log("printed file");
}).then(function(){
    console.log("cpu is free now");
    console.log("Now i can print something");
}).catch(function(err){
  console.log(err);
})