function solution(t, p) {
  let numArr = []
  const createNumCount = t.length - p.length
  let count = 0;
  for (let i = 0; i <= createNumCount; i++) {
    let newNum = t.substr(i, p.length);
    numArr.push(newNum) 
  }
  console.log(numArr)
  numArr.map( (number) => {
    if (number <= p) {
      count++
    }
  })
  return count
}
console.log(solution("3141592", "271"	))
console.log(solution("10203", "15"))