function solution(s1, s2) {
    const answer  = s1.reduce((acc, cur)=>{
        return s2.includes(cur) ? ++acc : acc;
    },0)
    return answer;
}