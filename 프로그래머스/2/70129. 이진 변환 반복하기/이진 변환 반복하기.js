function solution(s) {
    const answer = [0,0];
    
    
    while(s !== "1"){
        const oneCount = [...s].filter(v => v === "1").length;
        answer[1] += s.length - oneCount; 
        answer[0] += 1;
        s = oneCount.toString(2);
    }
    
    
    return answer;
}