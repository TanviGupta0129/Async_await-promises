let fs=require("fs");
let request=require("request");
console.log("start");
let blockingSince = Date.now();
let finalTime=blockingSince+1000*10;
async function asyn() {
  if (finalTime > Date.now()) {
    await setImmediatePromise();
    blockingSince = Date.now();
  }
}
fs.readFile("../../f1.txt",function cb(err,data){
    console.log("File 1 has arrived");
console.log(data.byteLength);
console.timeEnd("Task1");
});
fs.readFile("../../f2.txt",function cb(err,data){
    console.log("File 2 has arrived");
    console.log(data.byteLength);
    console.timeEnd("Task2");
    });
    fs.readFile("../../f3.txt",function cb(err,data){
        console.log("File 3 has arrived");
        console.log(data.byteLength);
        console.timeEnd("Task3");
        });
console.log("cpu is free now");
console.log("now i can print something");



//************************2nd method*****************************
console.time("task1");
fs.readFile("../../f1.txt",function(err,data){
  console.log(data.byteLength);
  console.timeEnd("task1");
})

let ft=Date.now()+10*1000;
while(Date.now()<ft){
}
console.time("task2");
fs.readFile("../../f2.txt",function(err,data){
  console.log(data.byteLength);
  console.timeEnd("task2");
})

console.time("task3");
fs.readFile("../../f1.mp4",function(err,data){
  console.log(data.byteLength);
  console.timeEnd("task3");
})



