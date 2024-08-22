function solution(arr, queries) {
    const answer = [...arr];
    
    queries.forEach(([s, e, k])=>{
        const b = answer.slice(s, e + 1).map((i, index)=> {
            return index % k === 0 ? i + 1 : i
        });
        answer.splice(s, e + 1, ...b);
    })
    
    
    return answer;
}