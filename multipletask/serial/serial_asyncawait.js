let fs=require("fs");
console.log("Before");

(async function(){
let data=await fs.promises.readFile("../../f1.txt");
console.log("F1 Data"+data.length);
data=await fs.promises.readFile("../../f2.txt");
console.log("F1 Data"+data.length);
data=await fs.promises.readFile("../../f3.txt");
console.log("F1 Data"+data.length);
})()

console.log("After");