function solution(n) {
    const answer = [...String(n)].reduce((acc,cur)=> acc + +cur, 0);
    return answer;
}