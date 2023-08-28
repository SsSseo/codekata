//43 - 명예의 전당

//서현 풀이
//k길이보다 크고, 명예의전당의 마지막 점수보다 높으면 명예의전당.pop을 한다
function solution(k, score) {
    let good = []
    let result = []
    score.forEach(newScore => {
        if (good.length >= k && newScore > good[good.length - 1]) {
            good.pop()
        }
        good.push(newScore)
        good.sort((a, b) => b - a)
        result.push(good[good.length - 1])
        console.log(good)
    })
    console.log(result)
    return result
}

//다른 사람 풀이
// 일단 새로 들어온 점수를 배열에 추가한다. (k+1개까지)
// 정렬
// 정렬 후 마지막 하나(가장 낮은 점수)를 빼면 명예의 전당 리스트가 된다.

//다른 사람의 풀이를 보면 일단 넣고 정렬 후 k개만큼만 남기는게 많다.
function solution(k, score) {
    let answer = [];
    let list = []
    for (let i = 0; i < score.length; i++) {
        list.push(score[i])
        list.sort((a, b) => b - a)
        console.log(list)
        if (list.length > k) {
            list.pop()
        }
        answer.push(list[list.length - 1])

    }
    console.log(answer)
    return answer;
}


solution(3, [10, 100, 20, 150, 1, 100, 200])
solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])


//미경님 풀이
function solution(k, score) {
    let honor = [];
    let result = [];

    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            honor.push(score[i]);
        }

        if (score[i] > Math.min(...honor)) {
            honor.pop();
            honor.push(score[i]);
            honor.sort((a, b) => b - a);
        }

        result.push(Math.min(honor[honor.length - 1]));

        return result;
    }

    console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
}