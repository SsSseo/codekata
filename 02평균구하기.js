function solution(arr) {
    let answer = 0;
    arr.forEach(element => {
        answer += element
    });
    answer = answer / arr.length
    console.log(answer)
    return answer;
}
solution([1, 2, 3, 4]);