function solution(array) {
    const answer = [...array.toString()].filter((v)=> v === "7").length
    return answer;
}