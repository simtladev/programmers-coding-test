function solution(n) {
    const answer = Array.from({length: n}, (_, i)=> i + 1)
    .filter((v)=> Array.from({length: v}, (_, i) => i + 1).filter((v2)=> v % v2 === 0).length >= 3).length;
    return answer;
}