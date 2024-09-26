function solution(s) {
    const sObject = [...s].reduce((acc, cur)=>{
         acc[cur] = (acc[cur] || 0) + 1;
         return acc;
    },{});
    const answer = Object.entries(sObject).filter(([_,i])=> i === 1).map(([v])=> v).sort().join("");
    return answer;
}