var a = 4;
var b = 20;
for (var i = 1; i <= a * b; i++) {
  if (i % a == 0 && i % b == 0) {
    break;
  }
}
console.log("decimal LCM is: " + i);
