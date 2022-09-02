var a = 36;
var b = 54;
let count = a;
if (a < b) {
  count = b;
}
for (var i = count; i >= 1; i--) {
  if (a % i == 0 && b % i == 0) {
    break;
  }
}
console.log("HCF is: " + i);
