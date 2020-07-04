const { performance } = require("perf_hooks");

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let time1 = performance.now();
sumToN(1000000000);
let time2 = performance.now();
console.log(`Time performance: ${(time2 - time1) / 1000} seconds`);
