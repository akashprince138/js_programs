let data = "hello";
let spData = data.split("");
let arr = [];
for (let i = 0; i < spData.length; i++) {
  let check = arr.filter((val) => val.character == spData[i]);
  if (check.length == 0) {
    let getLength = spData.filter((value) => value == spData[i]);
    arr.push({ character: spData[i], length: getLength.length });
  }
}
console.log("arr", arr);
