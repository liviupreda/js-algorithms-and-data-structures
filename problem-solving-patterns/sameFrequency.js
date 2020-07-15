/*
Given two positive integers, find out if the two numbers have the same frequency of digits

Time complexity: O(N)
*/

function sameFrequency(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    console.log("Enter 2 positive numbers");
    return false;
  }
  const string1 = num1.toString();
  const string2 = num2.toString();
  const array1 = string1.split("");
  const array2 = string2.split("");
  if (array1.length !== array2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let val of array1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of array2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  console.log(obj1);
  console.log(obj2);
  let keys1 = Object.keys(obj1);
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
