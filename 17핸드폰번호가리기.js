function solution(phone_number) {
    const number = phone_number
    for(let i = 0; i < phone_number.length - 4; i++) {
        console.log(i)
        number[i] = "*"

        console.log(number[i])
    }
    return number
}
console.log(solution("01033334444"))

//문자는 불변성을 가지기 때문에 안된다. 배열로 바꾼 후 해야함

function solution(phone_number) {
    const number = phone_number.split("")
    for(let i = 0; i < number.length - 4; i++) {
        number[i] = "*"
    }
    return number.join("")
}
console.log(solution("01033334444"))