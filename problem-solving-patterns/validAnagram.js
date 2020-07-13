/*
Given 2 strings, write a function to determine if the second string is an 
anagram of the first;
Examples:
validAnagram('', '') // true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') //false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') //true

You may assume the string contains only lowercase alphabets
Time complexity: O(n)
*/

function validAnagram(string1, string2) {
  const string1Arr = string1.split("");
  const string2Arr = string2.split("");
  let string1Obj = {};
  let string2Obj = {};
  for (let val of string1Arr) {
    string1Obj[val] = (string1Obj[val] || 0) + 1;
  }
  for (let val of string2Arr) {
    string2Obj[val] = (string2Obj[val] || 0) + 1;
  }
  console.log(string1Obj);
  console.log(string2Obj);
  return shallowEqual(string1Obj, string2Obj);
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

validAnagram("anagram", "nagaram");
