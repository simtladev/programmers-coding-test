function solution(number, n, m) {
    const answer = number % n || number % m  ? 0 : 1;
    return answer;
}