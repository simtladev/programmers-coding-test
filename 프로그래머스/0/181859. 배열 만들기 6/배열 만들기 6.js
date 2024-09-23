function solution(arr) {
    const answer = arr.reduce((stk, cur)=>{
        if(!stk.length) return [cur];
        
        const arrLastItem = stk[stk.length - 1];
        if(arrLastItem === cur){
            return [...stk].slice(0, stk.length - 1)
        }else{
            return [...stk, cur]
        }
    },[])
    
    
    
    return answer.length ? answer : [-1];
}