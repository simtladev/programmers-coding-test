function solution(box, n) {
    
    
    const answer = box.reduce((acc, cur)=> acc * Math.floor(cur / n), 1);
    return answer;
}

