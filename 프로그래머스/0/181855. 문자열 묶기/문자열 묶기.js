function solution(strArr) {
    const strToNumberObject = [...strArr].map((v)=> v.length).reduce((acc, cur)=>{
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{});
    
    const answer =  Math.max(...Object.values(strToNumberObject))
    
    
    return answer;
}