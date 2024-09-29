function solution(n, k) {
    const answer = n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
    return answer;
}