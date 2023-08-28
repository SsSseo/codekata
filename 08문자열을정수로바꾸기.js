//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

//제한 조건
//s의 길이는 1 이상 5이하입니다.
//s의 맨앞에는 부호(+, -)가 올 수 있습니다.
//s는 부호와 숫자로만 이루어져있습니다.
//s는 "0"으로 시작하지 않습니다.
function solution(s) {
    //s에 곱하기 1 해보기
    const num1 = s * 1
    //s에 빼기 0 해보기
    const num2 = s - 0
    //메서드 사용해보기
    const num3 = Number(s)
    const num4 = parseFloat(s)
    const num5 = parseInt(s)
    console.log(num1, num2, num3, num4, num5)
}
solution("-1234")