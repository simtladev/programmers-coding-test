function solution(strArr) {
    const answer = strArr.filter((v)=> !v.includes("ad"));
    return answer;
}