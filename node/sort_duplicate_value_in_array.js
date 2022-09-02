function sort_duplicate_value_in_array() {
  let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
  let n = arr.length;
  let i,
    arr0 = [],
    arr1 = [],
    arr2 = [];
  for (i = 0; i < n; i++) {
    switch (arr[i]) {
      case 0:
        arr0.push(arr[i]);
        break;
      case 1:
        arr1.push(arr[i]);
        break;
      case 2:
        arr2.push(arr[i]);
        break;
    }
  }
  let arrNew = arr0.concat(arr1);
  console.log(arrNew.concat(arr2));
}
sort_duplicate_value_in_array();
