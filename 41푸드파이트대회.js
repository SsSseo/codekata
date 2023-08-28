function solution(food) {
    let result = []

    //한 선수가 먹을 음식
    for(let i = 1; i < food.length; i++) { //i = 3
        for(let j = 0; j < food[i] - 1; j+=2) { // 2 //0 1
            result.push(i)
        }
    }
    console.log(result)

    //물
    result.push(0)

    //다른 선수가 먹을 음식
    for(let i = food.length; i >= 1 ; i--) {
        for(let j = 0; j < food[i] - 1; j+=2) {
            result.push(i)
        }
    }
    console.log(result.join(""))
    return result.join("")
}
solution([1, 3, 4, 6])
solution([1, 7, 1, 2])

//미경님 문제
// [프로그래머스 - 이상한 문자 만들기]
function solution(s) {
    let result = [-1, -1, -1, 2]; // 결과값
    let basket = []; // for문을 통해 s의 요소를 하나씩 담을 배열
  
    for (let i = 0; i < s.length; i++) {
      if (basket.includes(s[i])) {
        let index = basket.lastIndexOf(s[i]);
        result.push(i - index);
      } else {
        result.push(-1);
      }
  
      basket.push(s[i]);
    }
  
    return result;
  }
  
  console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
  console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]