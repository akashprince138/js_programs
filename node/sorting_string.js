function sortingArray() {
  var sortingArray = ["c", "d", "a", "f", "h", "b", "n", "k"];
  for (var i = 0; i <= sortingArray.length - 1; i++) {
    for (var j = i + 1; j <= sortingArray.length - 1; j++) {
      var temp;
      if (sortingArray[i] > sortingArray[j]) {
        temp = sortingArray[i];
        sortingArray[i] = sortingArray[j];
        sortingArray[j] = temp;
      }
    }
  }
  console.log("sorting array", sortingArray);
}
sortingArray();
