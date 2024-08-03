function solution(a, d, included) {
    let answer = 0;
    included.reduce((result, current)=>{
        if(current){
            answer += result;
        }
        result += d;
        return result;
    }, a)
    
    return answer;
}

// todo reduce를 한줄로 끝낼 수 있음 3번째 인자 사용