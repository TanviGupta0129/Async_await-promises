let fs = require("fs");
let files= ["../f1.txt", "../f2.txt", "../f3.txt","../f4.txt","../f5.txt"];

async function loopserial() {
    let dataArr=[]; 
    for(let i=0;i<files.length;i++){
        dataArr.push(await fs.promises.readFile(files[i]));
        console.log("Data of"+ i+"is :"+dataArr[i].byteLength);
    }
}

async function loopparallel() {
    let dataArr=[]; 
    for(let i=0;i<files.length;i++){
        dataArr.push(await fs.promises.readFile(files[i]));
    }
    await Promise.all(dataArr);
    for(let i=0;i<dataArr.length;i++){
        console.log("Data is :"+await(dataArr[i].length));
    }
}
console.log("Calling serial read");
loopserial();
console.log("Calling parallel read");
loopparallel();
