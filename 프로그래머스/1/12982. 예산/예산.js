function solution(d, budget) {
    const temp = d.sort((a, b)=>a - b);
    let answer = 0;
    
    for(let i = 0; i< d.length; i++){
        if(d[i] <= budget){
            budget -= d[i];
            answer++;
        }else{
            break;
        }
    }
    
    return answer;
}


