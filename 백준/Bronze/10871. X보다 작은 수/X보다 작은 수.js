const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, X] = input[0].split(' ');
const numbers = input[1].split(' ');
const newNumbers = numbers.map(number => Number(number)).filter(n => n < X);

console.log(newNumbers.join(' '));