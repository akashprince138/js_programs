function changeDecimalToBinary() {
  var binaryArr = [];
  var decimalNumber = 10;
  while (decimalNumber > 0) {
    var reminder = parseInt(decimalNumber % 2);
    binaryArr.push(reminder);
    decimalNumber = parseInt(decimalNumber / 2);
  }
  const binary = binaryArr.reverse().join("");
  console.log("binary number is: " + binary);
}
changeDecimalToBinary();
