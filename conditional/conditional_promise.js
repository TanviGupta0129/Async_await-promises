let fs=require("fs");
let f1=fs.promises.readFile("../f1.txt")
.then(function(data){
    console.log(`File 1 data ${data.byteLength}`);
    if(data.byteLength>20){
        let f2=fs.promises.readFile("../f2.txt")
        .then(function(data){
            console.log(`File2 Data ${data.byteLength}`);
            if(data.byteLength>40){
                let f4=fs.promises.readFile("../f4.txt")
                .then(function(data){
                    console.log(`File 4 data ${data.byteLength}`);
        })
}
        })
    }
    else{
        let f5=fs.promises.readFile("../f5.txt")
        .then(function(data){
            console.log(`File 5 data ${data.byteLength}`);
        }).catch(function(err){
            console.log(err);
        })
    }
}).catch(function(err){
    console.log(err);
})
    