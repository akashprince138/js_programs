function armstrongNumber() {
  var sum = 0;
  var armstrongNumber = 101;
  var enteredNumber = armstrongNumber;
  let length = armstrongNumber.length;
  while (armstrongNumber > 0) {
    var reminder = parseInt(armstrongNumber % 10);
    sum += parseInt(reminder ** length);
    armstrongNumber = parseInt(armstrongNumber / 10);
  }
  let check;
  if (sum == enteredNumber) {
    check = sum + " is Armstrong Number";
  } else {
    check = "Number is not Armstrong Number";
  }
  console.log("check", check);
}
armstrongNumber();
