// report[신고자, 피신고자]
// k번 이상 신고받으면 정지
// 정지당하면 신고자에게 메일보낸다


/**
 * 객체 생성
 */
function solution(users, reportArr, k) {
    let user = {}

    return divideReports(users, user, reportArr, k)
    //user = { muzi: '', frodo: '', apeach: '', neo: '' }
}

/**
 * user를 신고한사람 넣기
 */
function divideReports(users, user, setArrayReport, k) {
    
    setArrayReport.forEach( reportOne => {
        const [reporter, reported] = reportOne.split(" ")
        if(!user[reported]){
            user[reported] = new Set()
        }
        user[reported].add(reporter)
    })
    return findReporters(users, user, k)
    //user :  {
    //   muzi: [ 'apeach' ],
    //   frodo: [ 'muzi', 'apeach' ],
    //   apeach: [],
    //   neo: [ 'frodo', 'muzi' ]
    // }
}



/**
 * 찾기
 */
function findReporters(users, user, k) {
    let countArr = []
    console.log(user)
    console.log(users)
    
    for(let nameIdx = 0; nameIdx < users.length; nameIdx++) {
        let count = 0;
        const currentUserName = users[nameIdx]
        //user마다 돈다
        for(let i = 0; i < users.length; i++) {
            const key = users[i]
            
            if(user[key] && user[key].size >= k) {

                //유저의 이름이랑 신고한 사람의 이름 비교
                if(user[key].has(currentUserName)){
                    count ++
                }

            }
        }
        const countNum = count
        countArr.push(countNum)
    }

    for(let i = countArr.length; i < users.length; i++) {
        countArr.push(0)
    }
    console.log(countArr)
    return(countArr)

}


solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)