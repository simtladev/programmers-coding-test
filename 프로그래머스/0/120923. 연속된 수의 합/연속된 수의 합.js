function solution(num, total) {
    
    const start = (total / num) - ((num - 1) / 2);
    const answer = Array(num).fill(start).map((v, i)=> v + i);
    
    
    
    
    return answer;
}