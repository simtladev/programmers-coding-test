function solution(arr) {
    const answer = arr.map((value)=> {
        if(value >= 50 && value % 2 === 0){
            return value / 2;
        }
        if(value < 50 && value % 2 !== 0){
            return value * 2;
        }
        return value
    })
    return answer;
}