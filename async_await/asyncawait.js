function promiseCreater() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("resolved val of promise");
      }, 1000);
    })
  }
  async function promiseConsumer() {
    try {
      let data = await promiseCreater();
      console.log(data);
    } catch (err) {
      console.log("Inside catch")
  console.log(err);
    }
  }
  promiseConsumer();
  