function solution(order) {
    let answer = [...String(order)].filter((v)=> ["3","6","9"].includes(v)).length;
    return answer;
}