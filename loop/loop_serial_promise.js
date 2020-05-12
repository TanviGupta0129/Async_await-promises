let fs = require("fs");

      function promiseMultiFileReader() {
        let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];

  let file1WillBeReadPromise = fs.promises.readFile(files[0]);
  for (let i = 1; i < files.length; i++) {
    file1WillBeReadPromise = file1WillBeReadPromise.then(function (data) {
      console.log(`File no ${i} printed`)
      let nfp = fs.promises.readFile(files[i]);
      return nfp;
    })
    // return file1WillBeReadPromise
  }
  return file1WillBeReadPromise;
}
promiseMultiFileReader().then(function(data){
  console.log("file 5 will be printed");
  console.log(data);
})