// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
function solution(numbers) {
    let sum = 0
    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) {
            sum += i
        }
    }
    return sum
}
console.log(solution([1,2,3,4,6,7,8,0]))
console.log(solution([5,8,4,0,6,7,9]))

//sum 변수를 초기화하지 않으면 sum 변수는 처음에 undefined 상태가 됩니다. 따라서 이후의 연산에서 undefined와 숫자를 더하려고 하면 JavaScript는 숫자와 undefined를 더할 수 없다는 에러가 발생하며 결과적으로 NaN(Not-a-Number)이 반환됩니다.
