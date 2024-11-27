function solution(n) {
    const answer = Array.from({length: n}, (_, i)=> i + 1).filter((v)=> v % 2 !== 0);
    return answer;
}