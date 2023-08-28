// 45 카드뭉치

//서현 풀이
function solution(cards1, cards2, goal) {
    let result = "Yes"
    goal.forEach( word => {
        if(cards1[0] !== word && cards2[0] !== word) {
            result = "No"
        }
        if(cards1[0] === word) {
            cards1.shift()
        }
        if(cards2[0] === word) {
            cards2.shift()
        }
    })
    console.log(result)
    return result
}

// solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"])
solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])

//다른사람풀이
function solution(cards1, cards2, goal) {

    for(const s of goal) {

        if(cards1[0] == s) {
            cards1.shift();
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}