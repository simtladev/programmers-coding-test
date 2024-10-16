function solution(sides) {
    const [a, b] = sides;
    
    const answer = (Math.max(a, b) - (Math.max(a, b) - Math.min(a, b))) + (Math.max(a, b) + Math.min(a, b) - 1) - Math.max(a, b);
    
    return answer;
}