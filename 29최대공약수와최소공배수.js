//최대공약수와 최소공배수
function solution(n, m) {
    let nDivisor = []
    let result = []
    //n의 약수 구하기
    for(let i = 1; i <= n; i++) {
        if(n % i === 0){
            nDivisor.push(i)
        }
    }
    //m의 약수 구하기
    let isTrue = true
    let num = m
    while(isTrue) {
        if(m %  num === 0 && nDivisor.includes(num)){
            result.push(num)
            isTrue = false
        }
        num--
    }

    //배수
    result.push(n * m / result)
    console.log(result)
    
}

solution(3,12)