function solution(s) {
    const answer = [...s].sort((a,b)=> {
        return a > b ? -1 : 1
    }).join("");
    return answer;
}