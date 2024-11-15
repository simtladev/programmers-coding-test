function solution(brown, yellow) {
    const answer = [];
    
    const areaOfYellow = [];
    
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if(yellow % i === 0){
            areaOfYellow.push([yellow / i ,i]);
        }
    }
    
    for(const area of areaOfYellow){
        const [width, length] = area;
        
        if(width * 2 + length * 2 + 4 === brown) {
            answer.push(width + 2, length + 2);
            break;
        }
    }
    
    
    
    return answer;
}