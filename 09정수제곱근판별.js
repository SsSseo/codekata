//임의의 양의 정수 n에 대해, 
//n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
    let number = 0;
    //제곱근 구하는 메서드 사용하여 n의 제곱근 변수 만들기
    const sqrtNum = Math.sqrt(n)
    //제곱근이 정수라면 x+1의 제곱 리턴
    if(parseInt(sqrtNum) === sqrtNum) {
        number = (sqrtNum+1) ** 2
        return number
    } else {
    //아니라면 -1 리턴
        return -1
    } 
}
solution(121)