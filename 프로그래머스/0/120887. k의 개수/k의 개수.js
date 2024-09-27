function solution(i, j, k) {
    let answer = 0;
    for(; i <= j; i++){
        [...String(i)].map((v)=>{
            if(+v === k)answer++;    
        })
    }
    return answer;
}