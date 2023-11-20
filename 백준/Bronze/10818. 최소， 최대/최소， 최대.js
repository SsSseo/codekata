const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = input[1].split(' ').map(Number);
let minNumber = arr[0]
let maxNumber = arr[0]
for(let i = 0; i < arr.length; i++) {
  if(minNumber > arr[i]) minNumber = arr[i];
  if(maxNumber < arr[i]) maxNumber = arr[i];
}
const result = [minNumber, maxNumber]
console.log(result.join(' '));