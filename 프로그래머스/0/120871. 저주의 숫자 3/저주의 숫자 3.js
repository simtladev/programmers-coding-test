function solution(n) {
    let answer = 1;
    
    for(let i = 1; i < n; i++){
        answer++;
        while(answer % 3 === 0 || ![...answer.toString()].every((v)=> v !== "3")) answer++;
    }

    return answer;
}
