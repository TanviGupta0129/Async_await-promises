let fs= require("fs");
function promiseMultiFileReader(){
let files=["../f1.txt","../f2.txt","../f3.txt","../f1.mp4","../f2.mp4"];
let file1WillBeReadPromise=fs.promises.readFile(files[0]);
for(let i=1;i<files.length;i++){
  file1WillBeReadPromise= file1WillBeReadPromise
  .then(function(data){
       console.log(`file no${i} printed`);
       let nfp=fs.promises.readFile(files[i]);
       return nfp;  
    })
}
return file1WillBeReadPromise;
}
promiseMultiFileReader().then(function(data){
    console.log("file no5 printed");
})

//***************************2nd method ****************

let fs = require("fs");
function promiseMultiFileReader() {
  let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];
  for (let i = 0; i < files.length;) {
    let nsp = fs.promises.readFile(files[i++]);
    nsp.then(function (data) {
      console.log(`Data of file ${i}`);
    })
    nsp.catch(function (err) {
      console.log(err)
    })
  }
}
promiseMultiFileReader();

