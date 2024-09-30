function solution(age) {
    const answer = [...age.toString()].map((v)=> String.fromCharCode(97 + +v)).join("");
    return answer;
}