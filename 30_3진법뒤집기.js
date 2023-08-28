//3진법 뒤집기
function solution(n) {
    const result = n.toString(3).split("").reverse().join("")
    console.log(parseInt(result, 3))
}
solution(45)