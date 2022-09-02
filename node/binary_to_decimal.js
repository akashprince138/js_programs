function changeBinaryToDecimal() {
  var sum = 0;
  var reminder = 0;
  var binaryNumber = String(1010);
  binaryNumber = binaryNumber.split("").reverse();
  for (var i = 0; i < binaryNumber.length; i++) {
    sum = sum + parseInt(binaryNumber[i]) * Math.pow(2, i);
  }
  console.log("decimal number is: " + sum);
}
changeBinaryToDecimal();
