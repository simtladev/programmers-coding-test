const checkEven = (n) => {
    return n % 2 ==0;
}


function solution(n) {
    
    if(checkEven(n)){
        let answer = 0;
        for(let i = 1; i <= n; i++){
            if(checkEven(i)){
                answer += i * i;
            }
        }
        return answer;
    }else{
        let answer = 0;
        for(let i = 1; i <= n; i++){
            if(!checkEven(i)){
                answer += i;
            }
        }
        return answer;
    }

}