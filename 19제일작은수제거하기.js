function solution(arr) {
    if (arr.length === 1) {
        return [-1]
    }

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]
    }
    // const minValue = Math.min(...arr);
    // const result = newArr.filter(num => num !== minValue)
    arr.sort((a, b) => a - b)
    console.log(arr, newArr)
    const result = newArr.filter(num => num !== arr[0])
    return result
}


console.log(solution([11, 12, 2, 5, 4]))
console.log(solution([10]))


















//arr.sort()
//const result = newArr.filter(num => num !== arr[0]) 왜 실패하는지

//미경님 풀이
// function solution(numbers) {
//     if (numbers.length === 1) return [-1];

//     const minNumberIndex = numbers.indexOf(Math.min(...numbers));
//     numbers.splice(minNumberIndex, 1);
//     return numbers;
// }
