let done = true;
const data = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "done";
    setTimeout(() => {
      resolve(workDone);
    }, 3000);
  } else {
    const why = "failed";
    reject(why);
  }
});
data
  .then((ok) => {
    console.log(ok);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("completed");
  });
