function FactorialNumber() {
  var FactorialNumber = 5;
  var fNumber = FactorialNumber;
  var number = 1;
  for (var i = FactorialNumber; i >= 2; i--) {
    number = number * fNumber;
    fNumber--;
  }
  console.log("value: " + number);
}
FactorialNumber();
