function solution(intStrs, k, s, l) {
    
    const answer = intStrs.map((str)=>{
        return +str.slice(s, s + l);
    }).filter((str)=> str > k);
    
    
    return answer;
}