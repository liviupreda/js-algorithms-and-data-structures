/*
function accepts a variable number of arguments
checks wether there are any duplicates among the arguments passed in
DONE: Complexity: time O(n), space O(n)
Bonus: Complexity time O(nlogn), space O(1)
*/

function areThereDuplicates(...args) {
  console.log(args);
  let obj = {};
  for (let arg of args) {
    obj[arg] = (obj[arg] || 0) + 1;
  }
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] > 1) return true;
  }
  return false;
}

function areThereDuplicatesSet() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates("a", "b", "c", "d"));
