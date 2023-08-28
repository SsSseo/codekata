// for문 이용 i로 나눠서 0으로 딱 떨어지는 값
// n % i === 0 ;
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += n % i === 0 ? i : null;
  }
  console.log(sum);
  return sum;
}
solution(12);
