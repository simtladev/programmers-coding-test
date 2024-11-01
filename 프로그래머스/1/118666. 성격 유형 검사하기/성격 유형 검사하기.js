const points = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0
}

function solution(survey, choices) {
    survey.forEach((personality, i)=>{
        const currentChoice = choices[i];
        const [leftPoint, rightPoint] = [...personality];
        const result = Math.abs(currentChoice - 4);
        
        if(currentChoice < 4){
            points[leftPoint] += result;
        }else if(currentChoice > 4){
            points[rightPoint] += result;
        }
    });
    
    let answer = "";
    const point = Object.keys(points);
    
    for (let i = 0; i < point.length; i += 2) {
        const leftPoint = points[point[i]];
        const rightPoint = points[point[i + 1]];
        if (leftPoint >= rightPoint) {
          answer += point[i];
        } else {
          answer += point[i + 1];
        }
    }
    
    return answer;
}