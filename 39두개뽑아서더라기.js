//두 개 뽑아서 더하기
function solution(numbers) {
    // let newArr = []
    // for(let i = 0; i < numbers.length; i++) {
    //     for(let j = i+1; j < numbers.length; j++) {
    //         newArr.push(numbers[i] + numbers[j])
    //     }
    // }
    // newArr.sort((a, b) => a - b)
    // const result = [...new Set(newArr)]
    // console.log(result)

    let newArr = []
    numbers.forEach((num1, i) => {
        numbers.slice(i + 1).forEach(num2 => {
            newArr.push(num1 + num2);
        });
    });

    newArr.sort((a, b) => a - b);
    
    const result = [...new Set(newArr)];
    console.log(result);
}

solution([2,1,3,4,1])
solution([5,0,2,7])