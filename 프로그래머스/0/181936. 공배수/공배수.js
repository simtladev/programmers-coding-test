function solution(number, n, m) {
    var answer = number % n || number % m  ? 0 : 1;
    return answer;
}