function solution(picture, k) {
    const answer = picture.reduce((acc, cur)=>{
        const line = [...cur].map((dote)=> dote.repeat(k)).join("");
        for(let i = 0; i < k; i++){
            acc.push(line);    
        }
        return acc;
    },[])
    

   
    return answer;
}