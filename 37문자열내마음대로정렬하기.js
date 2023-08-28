//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    // n번째 문자
    let nStr = "" 

    
    // n번째 인덱스 문자를 strings 요소의 앞에 붙이기
    // car -> acar (n = 1)
    strings.forEach( (str, i) => {
        nStr = str.substr(n, 1)
        strings[i] = nStr + str
    })

    //오름차순 정렬 (n번째 인덱스 기준으로 오름차순 정렬됨)
    strings.sort()

    
    strings.forEach( (str, i) => {
        nStr = str.substr(1)
        strings[i] = nStr
    })
    
    
    console.log(strings)
    return strings
}

solution(["sun", "bed", "car"],	1)
solution(["abce", "abcd", "cdx"], 2)