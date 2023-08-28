//가장 가까운 같은 글자
function solution(s) {

    //결과 출력 배열
    let result = []

    for(let i = 0; i < s.length; i++) {
        let same = -1

        for(let j = i-1; j >= 0; j--) {
            console.log('i', i, 's[i] : ', s[i] ,'       j', j, 's[j] : ', s[j] )
            if(s[i] === s[j]) {
                same = i - j
                break
            }
        }
        result.push(same)
    }
    console.log(result)
    return result;
}

solution("banana")

// solution("foobar")