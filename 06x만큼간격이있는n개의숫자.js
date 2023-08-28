// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
function solution(x, n) {
    var ans = [];
    let num = 0;
    for (let i = 0; i < n; i++) { // n = 2
      num += x; // num += -4
      ans.push(num);
    }
    console.log(ans);
    return ans;
  }
  solution(-4, 2);





// 반목문을 통해, x를 검증해야 한다
// x와 n 변수를 미리 선언해둬야 한다
// 반복되는 매개변수 i가 x의 배수를 만날 때 마다, 배열에 넣어주면 된다 for문 말고 while로 사용하고싶어요!
// 반복문은 매개변수 n을 기준으로 돌려야한다.
function solution(x, n) {
    // let num = [];
    // let absNum = Math.abs(x)
    // for (let i = x; i <= absNum * n; i++) {
    //   if (i % x === 0) {
    //     num.push(num[i-1] + x);
    //   }
    // }
    // console.log(num)
    // return num;
    let numArr = [x];
    while (numArr.length < n) {
      numArr.push(numArr[numArr.length - 1] + x);
    }
    console.log(numArr);
    return numArr;

  }
  solution(-4, 2);