function solution(n, m, section) {
  let wallAreaArr = [];
  for (let i = 1; i <= n; i++) {
    wallAreaArr.push(i);
  }

  let count = 0

  for(let i = 0; i < section.length; i++) {
    for(let j = 0; j < wallAreaArr.length; j++) {
      
      if (section[i] === wallAreaArr[j]) {
        
        wallAreaArr.splice(j, m) 
        count++
      }
    }

  }
  
  return count;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));

