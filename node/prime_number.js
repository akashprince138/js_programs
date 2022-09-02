function primeNumber() {
  var primeNumber = 50;
  for (var i = 2; i <= primeNumber; i++) {
    for (var j = 2; j <= i; j++) {
      if (i == j) {
        console.log(i);
      }
      if (i % j == 0) {
        break;
      }
    }
  }
}
primeNumber();
