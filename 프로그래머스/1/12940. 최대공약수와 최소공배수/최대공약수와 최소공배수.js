// 최대 공약수, 최대 공배수 구하기

function solution(n, m) {
    let i = 1;
    const answer = [];
    
    while(i <= n || i <= m){
        if(n % i !== 0 || m % i !== 0){
            i++;
            continue;
        }
            
        answer[0] = (answer[0] || 1) * i;
        n /= i;
        m /= i;
        i = 2;
    }
    
    answer[1] = answer[0] * n * m;
    
    
    return answer;
}