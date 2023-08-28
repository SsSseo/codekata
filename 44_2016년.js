// 44 2016년

//서현 풀이
function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const date = new Date(2016, a - 1, b) // js는 0월부터 시작하므로 -1을 해준다

    console.log(day[date.getDay()])

}

solution(5, 24)


//미경님 풀이
function solution(a, b) {
    const date = new Date(`2016-${a}-${b}`); // 날짜 정보 생성
    const index = date.getDay(); // 날짜에 해당하는 요일 생성
    const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // 요일 배열

    return weekDay[index];
}
console.log(solution(5, 24));


//다른사람 풀이
function getDayName(a, b) {
    var dayList = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var daySum;
    if (a < 2) {
        daySum = b - 1;
    } else {
        daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
    }
    return dayList[daySum % 7];
}

