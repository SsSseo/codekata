//부족한 금액 계산하기
function solution(price, money, count) {
    //나에게 있는 돈
    let myMoney = money
    
    let result = 0

    for(let i = 1; i <= count; i++) {
        myMoney = myMoney - (price * i)
    }


    //count번 타고 남은 돈 < count번 탈 때 내야할 돈
    if(myMoney < price * count && myMoney < 0) {
        result = Math.abs(myMoney)
    } else {
        result = 0
    }
    console.log(result)
    return result;
}

solution(200, 100, 2)