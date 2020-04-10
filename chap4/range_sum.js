function range(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if(step > 0) {
    for(let i = start; i <= end; i++)  arr.push(i);
  } else {
    for(let i = start; i >= end; i--) arr.push(i);
  }
  return arr;
}

function sum(arr) {
  let total = 0;
  for(let val of arr) total += val;
  return total;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 1));
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55