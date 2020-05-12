setTimeout(
    function(){
        console.log("Task 1 printed after minimum delay of 3 seconds")},5000);
    let ft=Date.now()+6*1000;
    while(Date.now()<ft){

    }
    setTimeout(function(){
        console.log("Task 2 printed after minimum delay of 2 seconds");
    },2000);
    setTimeout(function(){
        console.log("Task 3 printed after minimum delay of 2 seconds");
    },2000);