function solution(n) {
    const answer = new Set();
    
    let i = 2;
    
    while(i <= n){
        if(n % i === 0){
            answer.add(i);
            n = n / i; 
            i = 2;
        }else{
            i++;   
        }
    }
    
    return [...answer];
}