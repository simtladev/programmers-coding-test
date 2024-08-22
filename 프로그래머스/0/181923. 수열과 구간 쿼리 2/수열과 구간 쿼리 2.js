function solution(arr, queries) {
    const answer = [];
    
    queries.forEach(([s,e,k])=>{
        const a = arr.slice(s, e + 1).filter((item)=> item > k).sort((a, b) => a - b);
        if(!a.length){
         return answer.push(-1);  
        };
        return answer.push(a[0]);
    });
    
    
    
    return answer;
}