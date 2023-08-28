function solution(s) {
    const numStr = Number(s)
    const intStr = parseInt(s)

    let result = false
    if (numStr === intStr && (s.length === 6 || s.length === 4)) {

        result = true;

    }
    return result;
}
console.log(solution("a234"))
console.log(solution("1234"))


