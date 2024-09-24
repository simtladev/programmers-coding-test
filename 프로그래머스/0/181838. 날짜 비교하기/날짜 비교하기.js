function solution(date1, date2) {
    const answer = +date1.join("") < +date2.join("") ? 1 : 0
    return answer;
}