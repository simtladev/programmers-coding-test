function solution(sides) {
    const [a,b,c] = sides.sort((a, b)=> a - b);
    
    const answer = a + b > c ? 1 : 2;
    
    
    return answer;
}