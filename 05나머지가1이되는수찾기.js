//while문 사용. 1부터 시작해서 나머지가 1인 수 나오면 break
function solution(n) {
    let num = 0;
  
    while (true) {
      num++;
      if (n % num === 1) {
        console.log(num);
        return num;
      }
    }
  }
  solution(10);