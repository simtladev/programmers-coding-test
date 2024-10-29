function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a){
        answer += Math.trunc(n / a) * b
        n = n % a + Math.trunc(n / a) * b;
    }
    
    
    
    return answer;
}