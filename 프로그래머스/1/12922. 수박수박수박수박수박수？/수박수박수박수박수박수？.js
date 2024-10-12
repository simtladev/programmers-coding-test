function solution(n) {
    const answer = Array(n).fill(n).reduce((acc, cur, i)=>{
        return acc + (i % 2 === 0 ? "수" : "박");
    }, "");
    
    return answer;
}