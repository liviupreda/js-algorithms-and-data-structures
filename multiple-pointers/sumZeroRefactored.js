/*
Write a function called sumZero which accepts a sorted array of integers;
The function should find the first pair where the sum is 0
Return an array that includes both values that sum to zero 
or undefined if a pair does not exist

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]) // [-3, 3]

Refactored solution time O(n)
*/

function sumZero(arr) {
  // set two pointers at the beginning respectively end of array
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2, 2]
