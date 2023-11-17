const solution = (start_num, end_num) => {
  let solution = [];
  for(let i=start_num; i>=end_num; i--) {
    solution.push(i);
  }
  return solution;
}


solution(10, 3);