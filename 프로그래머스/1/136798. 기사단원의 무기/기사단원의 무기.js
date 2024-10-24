function solution(number, limit, power) {
    const numberList = Array.from({length: number}, (_,i)=> i + 1);
    const answer = numberList.reduce((acc, cur)=>{
        const currentPower = Array.from({length: Math.sqrt(cur)}, (_, i)=> i + 1).reduce((acc2, cur2)=>{
            if(cur % cur2 === 0){
                if(cur / cur2 === cur2){
                    return acc2 += 1
                }else{
                    return acc2 += 2;
                }
            }
            return acc2;
        }, 0);
    
        
        return currentPower <= limit ? acc += currentPower : acc += power;
    }, 0)
        
    return answer; 
}