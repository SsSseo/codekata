// report[신고자, 피신고자]
// k번 이상 신고받으면 정지
// 정지당하면 신고자에게 메일보낸다


/**
* 객체 생성
*/
function solution(users, reportArr, k) {
    let user = {}
    for(let i = 0; i < users.length; i++) {
    user[users[i]] = []
    }
    return removeDuplicateReports(users, user, reportArr, k)
    //user = { muzi: '', frodo: '', apeach: '', neo: '' }
    }
    
    /**
    * report 중복제거
    */
    function removeDuplicateReports(users, user, reportArr, k) {
    const setReport = new Set(reportArr)
    const setArrayReport = [...setReport]
    return divideReports(users, user, setArrayReport, k)
    }
    
    /**
    * user를 신고한사람 넣기
    */
    function divideReports(users, user, setArrayReport, k) {
    
    setArrayReport.forEach( reportOne => {
    const arrayReportOne = reportOne.split(" ")
    for(let key in user) {
    if(key === arrayReportOne[1]) {
    user[key].push(arrayReportOne[0])
    }
    }
    })
    return countReport(users, user, k)
    //user : {
    // muzi: [ 'apeach' ],
    // frodo: [ 'muzi', 'apeach' ],
    // apeach: [],
    // neo: [ 'frodo', 'muzi' ]
    // }
    }
    
    
    
    /**
    * 횟수 세기 위한 함수
    */
    function countReport(users, user, k) {
    let countReporter = {}
    
    for(let i = 0; i < users.length; i++) {
    countReporter[users[i]] = 0
    }
    return findReporters(users, user, countReporter, k)
    }
    
    /**
    * 찾기
    */
    function findReporters(users, user, countReporter, k) {
    let countArr = []
    
    
    
    for(let nameIdx = 0; nameIdx < users.length; nameIdx++) {
    let count = 0;
    
    //user마다 돈다
    for(let key in user) {
    if(user[key].length >= k) {
    
    //나를 신고한 사람의 수 만큼 반복
    for(let i = 0; i < user[key].length; i++) {
    
    //유저의 이름이랑 신고한 사람의 이름 비교
    if(users[nameIdx] === user[key][i]){
    count ++
    }
    
    }
    
    }
    
    }
    const countNum = count
    countArr.push(countNum)
    }
    
    for(let i = countArr.length; i < users.length; i++) {
    countArr.push(0)
    }
    return(countArr)
    
    }
    
    
    solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)