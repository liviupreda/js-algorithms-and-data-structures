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
  let countObj = {};
  // for each element of arr1
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === Math.pow(arr1[i], 2)) {
        countObj[arr1[i]] > 0 ? countObj[arr1[i]]++ : (countObj[arr1[i]] = 1);
      }
    }
  }
  // for each element of arr2
  // if arr2[j] === arr1[i] ^ 2 ?
  // countObj[arr1[i]] > 0 ? countObj[arr1[i]]++ : countObj[arr1[i]] = 1;

  // for (let i = 0; i < arr1.length; i++) {
  //   if (!countObj[arr1[i]] ||) {
  //   }
  // }

  return countObj;
}

console.log(same([1, 2, 3, 2], [4, 1, 9, 4]));
