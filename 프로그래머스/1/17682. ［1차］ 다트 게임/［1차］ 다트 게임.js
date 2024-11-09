function solution(dartResult) {
    const bonus = {
        S: 1,
        D: 2,
        T: 3
    }
    
    const options = {
        "#": -1,
        "*": 2
    }
    
    const points = dartResult.match(/\d+|./g).reduce((points, dart)=> {
        if(!isNaN(+dart)){
            points.push(+dart);   
        }else if(Object.keys(bonus).includes(dart)){
            points[points.length - 1] = Math.pow(points[points.length - 1], bonus[dart]); 
        }else if(dart === "*"){
            points[points.length - 1] = points[points.length - 1] * options[dart];
            if(points.length >= 2) points[points.length - 2] = points[points.length - 2] * options[dart]; 
        }else if(dart === "#"){
            points[points.length - 1] = points[points.length - 1] * options[dart];
        }
        
        return points;
    },[]);
    
    const answer = points.reduce((acc, cur)=> (acc + cur), 0);
    
    return answer;
}