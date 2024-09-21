function solution(arr, query) {
    
    const answer = query.reduce((acc, v, i)=>{
        const isEven = i % 2 === 0;
        
        const arr = [...acc];
        if(isEven){
            arr.splice(v + 1, arr.length - v - 1);
        }else{
            arr.splice(0, v);
        }
        
        return arr;
    }, arr)
    
    
    
    
    return answer;
}