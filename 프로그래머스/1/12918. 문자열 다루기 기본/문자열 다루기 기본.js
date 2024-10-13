function solution(s) {
    const answer = (s.length === 4 || s.length === 6) && [...s].every((v)=> !isNaN(v));
    return answer;
}