function solution(left, right) {
    const nums = Array.from({length: right - left + 1}, (_,i) => left + i);
    const answer = nums.reduce((acc, cur)=>{
        const count = Array.from({length: cur }, (_, i) => i + 1).filter((v)=> cur % v === 0).length;
        return count % 2 === 0 ? acc + cur : acc - cur;
    },0);
    
    return answer;
}