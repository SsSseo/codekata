
const input = require('fs').readFileSync('text/10807.txt').toString().split('\r\n');
const [count, numbers, v] = input;
const result = numbers.split(' ').filter(n => n === v).length;

console.log(result);
