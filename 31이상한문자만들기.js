function solution(s) {
  const strArr = s.split(" ")
  let result = []

  strArr.map(str => {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {

      if (i % 2 === 0 && str[i] >= "a" && str[i] <= "z") {
        //짝수이고 소문자인 경우
        newStr += String.fromCharCode(str.charCodeAt(i) - 32)
      } else if (i % 2 !== 0 && str[i] >= "A" && str[i] <= "Z") {
        //홀수이고 대문자인 경우
        newStr += String.fromCharCode(str.charCodeAt(i) + 32)
      } else {
        newStr += str[i]
      }
    }
    result.push(newStr)
  })
  result = result.join(" ")

  return result
}

console.log(solution(" try hello world"))