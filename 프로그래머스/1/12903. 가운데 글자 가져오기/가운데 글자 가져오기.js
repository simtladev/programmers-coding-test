function solution(s) {
    const answer = s.slice(s.length % 2 === 0 ? Math.floor(s.length / 2) - 1 : Math.floor(s.length / 2) , s.length / 2 + 1);
    return answer;
}