function solution(n) {
    const answer = Array.from({length: n}, (_, i) => i + 1)
    .reduce((acc ,cur)=> n % cur === 0 ? acc + cur : acc, 0);
    return answer;
}