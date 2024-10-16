function solution(sides) {
    const [a, b] = sides;
    const longLine = Math.max(a, b);
    const shortLine = Math.min(a, b);
    
    const answer = (longLine - (longLine - shortLine)) + (longLine + shortLine - 1) - longLine;
    return answer;
}