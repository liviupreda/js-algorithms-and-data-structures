const { performance } = require("perf_hooks");

function sumToN(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
sumToN(1000000000);
let time2 = performance.now();
console.log(`Time performance: ${(time2 - time1) / 1000} seconds`);
