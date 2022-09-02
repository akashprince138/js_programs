let fun1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done1");
    }, 5000);
  });
};

let fun2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done2");
    }, 6000);
  });
};

let main = async () => {
  console.log("first");
  let data = await fun1();
  data = await data;
  console.log("data", data);
  let data2 = await fun2();
  data2 = await data2;
  console.log("data2", data2);
  console.log("done");
};
main();
