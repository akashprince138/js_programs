let arr = [5, 3, 5, 4, 4, 2];
let x = 2;
let y = 3;
let diff = arr.length;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if ((x == arr[i] && y == arr[j]) || (y == arr[i] && x == arr[j])) {
      if (diff > Math.abs(i - j)) {
        diff = Math.abs(i - j);
      }
    }
  }
}
console.log("diff2", diff);
