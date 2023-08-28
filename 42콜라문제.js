function solution(a, b, n) {
    let cola = n
    let count = 0

    //마트에 준 콜라 묶음
    let submittedCola = 0

    //마트에 주고 남은 콜라 개수
    let remainder = 0

    //마트에서 받을 콜라 개수
    let receivedCola = 0

    while( cola >= a ) {
        //마트에 준 콜라 묶음
        submittedCola = Math.floor(cola / a) //6

        //마트에 주고 남은 콜라 개수
        remainder = cola - (submittedCola * a) //2

        //마트에서 받을 콜라 개수
        receivedCola = submittedCola * b //6
        count += receivedCola //6

        //마트에서 나온 후 갖고 있는 콜라 수
        cola = remainder + receivedCola //8

    }

    console.log(count)
    return count
}

solution(2, 1, 20)
solution(3, 1, 20)