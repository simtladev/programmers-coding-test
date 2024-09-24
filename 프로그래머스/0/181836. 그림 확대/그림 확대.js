function solution(picture, k) {
    const answer = picture.reduce((acc, cur)=>{
        const line = [...cur].map((dote)=> dote.repeat(k)).join("");
        acc.push(...Array(k).fill(line));    
        
        return acc;
    },[])
    

   
    return answer;
}