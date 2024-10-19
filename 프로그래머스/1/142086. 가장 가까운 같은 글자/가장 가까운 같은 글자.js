function solution(s) {
    const answer = [...s].map((v, i)=> s.slice(0, i).lastIndexOf(v) !== -1 ? i - s.slice(0, i).lastIndexOf(v) : -1);
    return answer;
}