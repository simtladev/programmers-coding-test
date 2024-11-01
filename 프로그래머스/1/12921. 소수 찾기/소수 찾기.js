
function solution(n) {
    const list = Array.from({length: n - 1}, (_, i) => i + 2);
    
    
    let answer = [];
    for (let i=2; i<=n; i++) {
        if (list[i] === 0) continue;
        answer.push(i);
        list[i] = 0;
        
        for (let j=i*2; j<=n; j+=i) {
            if (list[j] === 0) continue;
            list[j] = 0;
        }
    }
    
    
    return answer.length;
}