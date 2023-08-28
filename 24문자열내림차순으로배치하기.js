//문자열 내림차순으로 배치하기
function solution(s) {
    const strArr = s.split("")
    let ascArr = []
    let small = []
    let big = []
    strArr.forEach(str => {
        ascArr.push(str.charCodeAt(0))
    })
    ascArr.forEach(str => {
        if (str > 90) {
            small.push(String.fromCharCode(str))
        } else {
            big.push(String.fromCharCode(str))
        }
    })
    small = small.sort().reverse().join("")
    big = big.sort().reverse().join("")
    const result = (small + big)
    console.log(result)
    return result

    // const result = s.split("").sort().reverse().join("")
    // console.log(result)
}

solution("Zbcdefg")