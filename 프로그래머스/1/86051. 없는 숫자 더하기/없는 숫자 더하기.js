function solution(numbers) {
    const answer = 45 - numbers.reduce((acc, cur)=> acc + cur);
    return answer;
}
