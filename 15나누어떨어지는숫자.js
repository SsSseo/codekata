//array의 각 element 중 divisor로 나누어 떨어지는 값을 
//오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
function solution(arr, divisor) {
    //비어있는 새로운 배열 선언
    let newArr = []
    //arr을 하나 하나 돌기
    arr.forEach( Element => {
        //arr의 요소 나누기 divisor
        const remainder = Element % divisor
        //나눈 값이 나누어 떨어지는가 확인
        if(remainder === 0) {
            //위의 값 처음에 만든 배열 안에 넣기
            newArr.push(Element)
        }
    })
    //메서드 사용하여 오름차순 정렬
    newArr.sort((a, b) => a - b) //newArr.sort() : 10이 5보다 작은거로 나옴

    //배열이 비어있다면 배열에 -1 넣기
    if(newArr.length === 0) {
        newArr.push(-1)
    }
    return newArr
}
console.log(solution([5, 9, 7, 10], 5))
console.log(solution([2, 36, 1, 3], 1))
console.log(solution([3,2,6], 10))