function solution(s){
    const answer = [...s].reduce((acc, cur)=> {
        if(cur === "("){
            acc.push(cur);
        }else{
            if(acc[acc.length - 1] === "("){
                acc.splice(acc.length - 1, 1)
            }else{
                acc.push(cur);
            }
        }
        return acc;
    }, []).length === 0;
    
    
    
    return answer;
}