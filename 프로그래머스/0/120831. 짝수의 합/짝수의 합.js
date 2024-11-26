function solution(n) {
    const answer = Array(n).fill(0).reduce((acc, _, i)=> (i + 1) % 2 === 0 ? acc + i + 1 : acc, 0);
    
    return answer;
}
