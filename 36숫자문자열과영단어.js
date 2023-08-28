//네오와 프로도가 숫자놀이를 하고 있습니다. 
//네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 
//프로도는 원래 숫자를 찾는 게임입니다.


// // 문자열로 된 숫자의 배열을 만든 후 switch문 (forEach사용, replace)
// function solution(s) {
//     const srt = ["zero", "one" , "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     const num = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]
//     srt.forEach((element, i) => {
//         s = s.replace(new RegExp(element, 'g'), num[i])
//     });
//     console.log(s)
// }

// 객체 사용
function solution(s) {
    const srt = {
        "zero" : 0,
        "one" : 1,
        "two" : 2, 
        "three" : 3, 
        "four" : 4, 
        "five" : 5, 
        "six" : 6, 
        "seven" : 7, 
        "eight" : 8, 
        "nine" : 9
    }
    for (const key in srt) {
        if (s.includes(key)) {
            s = s.replace(new RegExp(key, 'g'), srt[key]);
        }
    }
    console.log(s)
}

solution("one4seveneight")

