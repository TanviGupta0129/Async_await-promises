let fs = require("fs");
async function ConditionalRead(){
    let data1 = await fs.promises.readFile("../f1.txt");
    if(data1.byteLength >= 10 ){
        let data2 = await fs.promises.readFile("../f2.txt");
        console.log("Size of file 2 is :"+data2.byteLength);
    }else{
        let data2 = await fs.promises.readFile("../f3.txt");
        console.log("Size of file 3 is : "+data2.byteLength);
    }

}
console.log("Now calling Conditional read");
ConditionalRead();