function solution(x) {    
    const answer = x % [...x.toString()].reduce((acc, cur)=> acc + +cur,0) === 0 ? true : false;
    return answer;
}