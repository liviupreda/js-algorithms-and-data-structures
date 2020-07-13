/*
Write a function called sumZero which accepts a sorted array of integers;
The function should find the first pair where the sum is 0
Return an array that includes both values that sum to zero 
or undefined if a pair does not exist

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]
*/

// Naive solution, two loops, time O(n^2) space O(1)

function sumZero(arr) {
  // loop over array
  // for each element, firstPair = arr.findIndex(arr[i] + x = 0);
  // return [arr[arr.indexOf], firstPair]
  for (let i = 0; i < arr.length; i++) {
    const idx = arr.findIndex((e) => arr[i] + e === 0);
    if (idx !== -1 && arr[i] !== 0) {
      return [arr[i], arr[idx]];
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2, 2]
