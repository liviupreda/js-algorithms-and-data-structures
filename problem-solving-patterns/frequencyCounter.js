/* 
Write a function called *same*, which accepts two arrays.
The function should return *true* if every value in the array
has it's corresponding value squared in the second array.
The order does not matter; the frequency of values must be the same
*/

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) //false (must be same frequency)

function same(arr1, arr2) {
  // assign arr1 to object {element: element^2}
  let arr1Obj = {};
  let arr2Obj = {};
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr1Obj[arr1[i]] ? arr1Obj[arr1[i]]++ : (arr1Obj[arr1[i]] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    Math.sqrt(arr2[i]) === arr2Obj[arr2[i]]
      ? arr2Obj[Math.sqrt(arr2[i])]++
      : (arr2Obj[Math.sqrt(arr2[i])] = 1);
  }
  console.log(arr1Obj);
  console.log(arr2Obj);
  return shallowEqual(arr1Obj, arr2Obj);
}

function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(same([1, 2, 1], [4, 4, 1]));
