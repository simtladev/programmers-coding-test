function solution(arr, queries) {
    const answer = [];
    
    queries.forEach(([s,e,k])=>{
        return answer.push(arr.slice(s, e + 1).filter((item)=> item > k).sort((a, b) => a - b)[0] || -1);
    });
    
    
    
    return answer;
}