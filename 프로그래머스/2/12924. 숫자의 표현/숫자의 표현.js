function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= Math.floor(n / 2); i++){
        let num = i;
        for(let j = i + 1; num < n; j++){
            num += j;
        }
        
        if(num === n) answer++;
    }
    
    
    return answer + 1;
}