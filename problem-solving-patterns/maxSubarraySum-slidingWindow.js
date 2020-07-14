/*
Write a function called maxSubarraySum which accepts an array of
integers and a number called n. The function should calculate the
maximum sum of n consecutive elements in the array

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null

Naive time complexity O(n^2)
*/

function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 4));
