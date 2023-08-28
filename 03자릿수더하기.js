function solution(n) {
    n = String(n)
    let arr = []
    for(let i = 0; i < n.length; i++) {
        arr.push(Number(n[i]));
    }
    let sum = arr.reduce((a, b) => a + b, 0)
    console.log(sum)
    return sum
}
solution(123)

