let fs=require("fs");
console.log("Before");

(async function(){
    try{
let data1= fs.promises.readFile("../../f1.txt");
data2= fs.promises.readFile("../../f2.txt");
data3= fs.promises.readFile("../../f3.txt");
data1= await data1;
console.log("F1 Data"+data1.length);
data2= await data2;
console.log("F1 Data"+data2.length);
data3= await data3;
console.log("F1 Data"+data3.length);
    }
    catch(err){
        console.log(err);
    }
})()

console.log("After");