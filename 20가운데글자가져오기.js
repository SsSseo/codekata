//가운데 글자 가져오기
function solution(s) {
    const index = Math.floor(s.length / 2)
    if(s.length % 2 === 0) {
        return s.substr(index-1, 2)
    } else {
        return s[index]
    }
}

solution("abcde")
solution("qwer")