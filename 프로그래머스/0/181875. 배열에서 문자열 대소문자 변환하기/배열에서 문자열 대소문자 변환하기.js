function solution(strArr) {
    const answer = strArr.map((v, i)=> i % 2 === 0 ? v.toLowerCase() : v.toUpperCase())
    return answer;
}