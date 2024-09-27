function solution(bin1, bin2) {
    const a = parseInt(bin1, 2);
    const b = parseInt(bin2, 2);
    
    const answer = (a + b).toString(2);
    
    return answer;
}