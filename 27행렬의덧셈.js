//행렬의 덧셈
function solution(arr1, arr2) {
    let result = []
    
    for(let i = 0; i < arr1.length; i++) {
        let indexArr = []
        for(let j = 0; j < arr1[i].length; j++) {
            indexArr.push(arr1[i][j] + arr2[i][j])
        }
        result.push(indexArr)
    }
    console.log(result)
    console.log(arr1 + arr2)
    return result
}

solution([[1,2],[2,3]], [[3,4],[5,6]])