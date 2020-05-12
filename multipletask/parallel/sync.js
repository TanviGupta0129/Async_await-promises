let fs=require("fs");
console.log("Started executing file");
console.log("CPU is stuck till file is read");

fs.readFileSync("../../f1.mp4",function cb(err,data){
    console.log("File 1 has arrived");
console.log(data.byteLength);
});
fs.readFileSync("../../f2.mp4",function cb(err,data){
    console.log("File 2 has arrived");
    console.log(data.byteLength);
    });

//binary => array
console.log("cpu is free now");
console.log("now i can print something");