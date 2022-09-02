function bubbleSortingArray() {
  var sortingArray = [4, 12, 5, 7, 3, 9];
  for (var i = 0; i <= sortingArray.length - 1; i++) {
    for (var j = 0; j <= sortingArray.length - 1; j++) {
      var temp;
      if (sortingArray[j] > sortingArray[j + 1]) {
        temp = sortingArray[j];
        sortingArray[j] = sortingArray[j + 1];
        sortingArray[j + 1] = temp;
      }
    }
  }
  console.log("sorting array", sortingArray);
}
bubbleSortingArray();
