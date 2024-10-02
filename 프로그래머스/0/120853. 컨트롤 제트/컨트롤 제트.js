function solution(s) {
    const sArr = s.split(" ");
    const answer = sArr.reduce((acc, cur, i)=>{
        return cur === "Z" ?  acc -= sArr[i - 1] : acc += +cur;
    }, 0);
    return answer;
}