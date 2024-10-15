//4 5

function solution(numbers, k) {
    const answer = numbers[(k - 1) * 2 % numbers.length];
    return answer;
}