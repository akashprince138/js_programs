function primeNumber() {
  var primeNumber = 101;
  let primeNo = 0;
  while (primeNumber) {
    primeNumber++;
    for (var j = 2; j <= primeNumber; j++) {
      if (primeNumber == j) {
        primeNo = primeNumber;
        break;
      }
      if (primeNumber % j == 0) {
        break;
      }
    }
    if (primeNo > 0) {
      console.log(primeNo);
      break;
    }
  }
}
primeNumber();
