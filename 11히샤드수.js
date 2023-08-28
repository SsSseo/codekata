//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
//예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
//자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, 
//solution을 완성해주세요.
function solution(x) {
    //각 자릿수의 합 구하기
    
    //x가 그 합으로 나누어 떨어지는가?

    //나누어 떨어진다면 true 반환

    //나누어 떨어지지 않는다면 false 반환

    //=====서현 풀이=========
    /**
     * 각 자리수의 합
     */
    let sum = 0
    let newNum = x
    while(newNum > 0) {
        sum += newNum % 10
        newNum = Math.floor(newNum / 10)
    }
    const result = x % sum === 0? true : false
    console.log(result)
    return result

}
solution(10)
solution(12)
solution(11)
solution(13)


//=====지은님 풀이==========

function solution(x) {
    var answer = true;
    let sum = x
      .toString()
      .split('')
      .map((item) => Number(item))
      .reduce((add, cur) => (add += cur));
    if (x % sum === 0) {
      answer = true;
    } else answer = false;
  
    return answer;
  }
  
  
  console.log(solution(11));