/*
Given a sorted array of integers and a target average, determine
if there is a pair of values in the array where the average
of the pair equals the target average.
There may be more than one pair that matches the average target
Bonus:
Time O(n)
Space O(1)
*/

function averagePair(arr, avg) {
  let mid = Math.floor(arr.length / 2);
  let left = mid;
  let right = mid + 1;
  do {
    const test = (arr[left] + arr[right]) / 2;
    if (test === avg) return true;
    if (test < avg) right++;
    if (test > avg) left--;
  } while (left >= 0 && right < arr.length);
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
