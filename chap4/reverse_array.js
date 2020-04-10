function reverseArray(arr) {
  let newArr = [];
  for(let val of arr) newArr.unshift(val);
  return newArr;
}

function reverseArrayInPlace(arr) {
  let tmp;
  for(let i = 0; i < arr.length / 2; i++) {
    tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]