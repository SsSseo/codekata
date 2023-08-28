function solution(babbling) {
    /**
     * 가능한 발음
     */
    const canDoIt = ["aya", "ye", "woo", "ma"]
    //babbling 돌며 확인

    //0번째 인덱스에서부터 canDoI[i].length길이만큼 비교했을때 같은가?
    //같다면 canDoI[i].length길이만큼 지우기. 
    //count++
    //그 다음이 또 같은 문자면 넘어가기 count== 
    let result = [];
    babbling.forEach(sound => {
        console.log('1 ',sound, '=========================')
        let count = 0;
        canDoIt.forEach(shortStr => {
            
            //sound에서 shortStr의 길이만큼 문자열
            let newStr = sound.substr(0, shortStr.length)
            if(newStr === shortStr) {
                sound = sound.substr(shortStr.length, shortStr.length)
                count++
                console.log('2 ', newStr, shortStr, count)
                if(sound === shortStr){
                    console.log('3 ', sound, shortStr)
                    count = 0;
                }
            }
        })
        if(count > 0 && sound.length === 0) {
            result.push(sound)
            console.log('4 ', sound, count)
        }
        console.log('5  end========', result, result.length)
    });

    return result.length
}

solution(["aya", "yee", "u", "maa"])
// solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])