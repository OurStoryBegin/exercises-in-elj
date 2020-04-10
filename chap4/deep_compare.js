function deepEqual(valA, valB) {
  let condA = typeof valA === "object" && valA !== null;
  let condB = typeof valB === "object" && valB !== null;
  if(condA && condB) {
    let keysA = Object.keys(valA)
    let keysB = Object.keys(valB)
    if(keysA.length !== keysB.length) return false;
	for(let key of keysA) {
      if(keysB.includes(key)) return deepEqual(valA[key], valB[key]);
      else return false;
    }
  }
  return valA === valB;
}

let obj = {here: {is: "an"}, object: 2};
// true
console.log(deepEqual(obj, obj));
// false
console.log(deepEqual(obj, {here: 1, object: 2}))
// true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));