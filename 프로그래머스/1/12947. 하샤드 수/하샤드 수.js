function solution(x) {    
    const a = [...x.toString()].reduce((acc, cur)=> acc + +cur,0) ;
    const answer = x % a === 0 ? true :false
    
    return answer;
}