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

//3 7 11 15 19