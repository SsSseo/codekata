// k번째 수
function solution(array, commands) {
    let result = []

    commands.forEach((oneLoop) => {
        let processArray = []
        let [start, end, k] = oneLoop

        for(let i = start-1; i < end; i++) {
            processArray.push(array[i])
        }
        
        processArray.sort((a, b) => a - b)
        result.push(processArray[k-1])

    })
    console.log('result : ', result)
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])