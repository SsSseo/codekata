// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
function solution(num) {
    let count = 0;

    //입력된 수가 1이면 0 반환
    if (num === 1) {
        return 0
    }

    //입력된 수가 1이 아니면
    //count가 500이 되면 멈춰
    //짝수
    let isCurrent = false
    while (!isCurrent) {
        count++

        if (num % 2 === 0) {
            num = num / 2 // 3 1.5
        } else {
            num = num * 3 + 1
        }

        if (num === 1) {
            isCurrent = true
        } else if (count === 500) {
            count = -1
            isCurrent = true
        }

    }

    console.log(count)
    return count
}
solution(6)
solution(16)
solution(626331)








//지은님
function solution(num) {
    var answer = 0;

    if (num === 1) {
        return (answer = 0);
    }

    while (true) {
        answer++;
        console.log(answer);

        if (num % 2 === 0) {
            num = num / 2;
            console.log('짝수', answer, num);
        } else {
            num = num * 3 + 1;
            console.log('홀수', answer, num);
        }

        if (num === 1) break;
        else if (answer >= 500) {
            answer = -1;
            break;
        }
    }
    return answer;
}

console.log(solution(6));





//다른 사람 풀이
function collatz(num) {
    var answer = 0;
    while (num != 1 && answer != 500) {
        num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
        answer++;
    }
    return num == 1 ? answer : -1;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(collatz(6));