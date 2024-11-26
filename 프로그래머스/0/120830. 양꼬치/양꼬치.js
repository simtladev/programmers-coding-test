function solution(n, k) {
    k -= ~~(n / 10);
    const answer = n * 12000 - k * 2000;
    return answer;
}