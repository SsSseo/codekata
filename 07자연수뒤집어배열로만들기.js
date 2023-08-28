//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
//예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
function solution(n) {
    //1. 비어있는 새로운 배열을 만든다
    // let newArr = [];

    //2. n의 일의자리 숫자만 뽑아낸다

    //3. 2의 수를 배열에 넣는다
    //4. n에서 일의자리를 없앤..? (12345 -> 1234) 숫자를 만든다.
    //5. 반복

    //1. 비어있는 새로운 배열을 만든다
    let newArr = [];
    let newNum;
    //2. n의 일의자리 숫자만 뽑아낸다
    while (n > 0) {
        newNum = n % 10; // 0
        //3. 2의 수를 배열에 넣는다
        newArr.push(newNum);
        //4. n에서 일의자리를 없앤..? (12345 -> 1234) 숫자를 만든다. (n에 재할당하면 될듯!)
        n = Math.floor(n / 10);
        console.log(newNum);
    }
    return newArr;
}
solution(987123654)


// 일단 매개변수 n을 배열로 만든다
// 이 배열에서 제일 마지막 숫자를 배열 밖으로 꺼내는 메소드를 사용한다
// answer 배열에 차례대로 푸쉬한다

function solution2(n) {
    n = String(n)
    let arr = n.split("")
    let answer = []
    for (let i = 0; i < n.length; i++) {
        answer.push(Number(arr.pop()))
        console.log(answer)
    }
}

solution2(12345)