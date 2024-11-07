function solution(s) {
    const temp = s.split(" ");
    const answer = `${Math.min(...temp)} ${Math.max(...temp)}`; 
    return answer;
}