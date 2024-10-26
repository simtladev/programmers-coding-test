function solution(X, Y) {
    
    let answer = "";
    for(let i = 9; i >= 0; i--){
        const xLength = [...X].filter((v)=> +v === i).length;
        const yLength = [...Y].filter((v)=> +v === i).length;
        
        answer += i.toString().repeat(Math.min(xLength, yLength));
    }
    
    if(answer === "") return "-1";
    if(+answer === 0) return "0";
    return answer;
}