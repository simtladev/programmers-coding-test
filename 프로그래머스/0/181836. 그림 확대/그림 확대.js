function solution(picture, k) {
    const answer = picture.reduce((acc, cur)=>{
        const a = [...cur].map((dote)=> dote.repeat(k)).join("");
        
        for(let i = 0; i < k; i++){
            acc.push(a);    
        }
        
        
        return acc;
    },[])
    
    
    
   
    return answer;
}