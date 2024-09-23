function solution(arr, k) {
    const answer = arr.reduce((acc, cur)=>{
        const isCur = acc.find((v)=> v === cur);
        if(acc.length < k && !isCur){
            return [...acc, cur];
        }
        return acc;
    },[]);
    
    
    const result = answer.length < k ? [...answer, ...Array(k - answer.length).fill(-1)] : answer;
    
    
    return result;
}