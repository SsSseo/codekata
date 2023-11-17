// 1. 배열로 만든다
// 2. x배열 요소가 y배열에 있다면 새로운 배열에 추가하고, y배열에서 없앤다
// 3. 내림차순으로 정렬한다.
// 4. join
function solution(X, Y) {
  let long = ""
  let short = ""
  if(X.length > Y.length) {
    long = X
    short = Y
  } else {
    long = Y
    short = X
  }
  const longArr = long.split("")
  const shortArr = short.split("")
  let newLong = []
  let newShort = []
  let result = ""

  longArr.map(numberLong => {
    if(shortArr.includes(numberLong)){
      newShort.push(numberLong)
    }
  })

  shortArr.map(numberShort => {
    if(longArr.includes(numberShort)){
      newLong.push(numberShort)
    }
  })

  if(newLong.length === 0) {
    return "-1"
  }
  if(newLong.filter( num => num !== "0").length === 0) {
    return "0"
  }

  result = newShort.sort((a, b) => b - a).join("")
  return result
}
console.log(solution("12321", "42531"))
console.log(solution("100", "2345"))
console.log(solution("100", "203045"))