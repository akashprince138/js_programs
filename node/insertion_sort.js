function insertionSortingArray() {
  var sortingArray = [4, 12, 5, 7, 3, 9];
  let n = sortingArray.length;
  for (let i = 1; i < n; i++) {
    let current = sortingArray[i];
    let j = i - 1;
    while (j > -1 && current < sortingArray[j]) {
      sortingArray[j + 1] = sortingArray[j];
      j--;
    }
    sortingArray[j + 1] = current;
  }
  console.log("sorting array", sortingArray);
}
insertionSortingArray();
