function solution(n) {
    const answer = Array.from({length: n}, (_, i) => {
        return n % (i + 1) === 0 ? i + 1 : null
    }).filter(Boolean);
    return answer;
}