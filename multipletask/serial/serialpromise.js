let fs = require("fs");
let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt"];
function Loopserial() {
    let FRP = fs.promises.readFile(files[0]);
    for (let i = 0; i < files.length; i++) {
        FRP = FRP.then(function (data) {
            console.log(`Data ${i} ` + data.byteLength);
            let NextFile = fs.promises.readFile(files[i]);
            return NextFile;
        })
    }
    console.log();
}
Loopserial();
