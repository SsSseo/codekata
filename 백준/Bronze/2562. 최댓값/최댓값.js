const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = input.map(Number);
let maxValue = arr[0];
let count = 1;

for(let i = 0; i <= arr.length; i++) {
  if(maxValue < arr[i]) {
    maxValue = arr[i]
    count = i + 1;
  };
}

console.log(maxValue);
console.log(count);