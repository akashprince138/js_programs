function generatePrintBinary(n) {
  var q = [];
  q.push("1");
  while (n--) {
    var s1 = q[0];
    console.log("s1", s1);
    q.shift();
    console.log(s1);
    var s2 = s1;
    q.push(s1 + "0");
    q.push(s2 + "1");
    console.log("q2", q);
  }
}
var n = 10;
generatePrintBinary(n);
