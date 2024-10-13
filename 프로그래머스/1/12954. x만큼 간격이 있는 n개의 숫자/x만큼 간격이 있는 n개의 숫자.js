function solution(x, n) {
    const answer = Array.from({length: n}, (_, i)=>{
        return (i + 1) * x;
    });
    return answer;
}