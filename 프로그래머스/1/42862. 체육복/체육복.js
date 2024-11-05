function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    const realLost= lost.filter((v)=>!reserve.includes(v));
    const realReserve= reserve.filter((v)=>!lost.includes(v));
    answer+= lost.length - realLost.length;
    
    realLost.sort((a,b)=>a-b);
    realReserve.sort((a,b)=>a-b);
    
     for(const lost of realLost){
        const temp = realReserve.findIndex((v)=> v === lost - 1 || v === lost + 1);
        if(temp !== -1){
            realReserve.splice(temp, 1);
            answer++;
        }
     }
    
    return answer;
}