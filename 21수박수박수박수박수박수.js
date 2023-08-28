//수박수박수박수박수박수?
function solution(n) {
    const str = ["수","박"]
    const result = []
    for(let i = 0; i < n; i++){
        if(i % 2 === 0){
            result.push(str[0])
        } else {
            result.push(str[1])
        }
    }
    console.log(result.join(""))
    return result.join("")
}

solution(3)
solution(4)