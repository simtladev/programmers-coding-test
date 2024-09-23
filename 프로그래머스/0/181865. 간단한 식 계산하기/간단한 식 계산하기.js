const operator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    
}

function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    
    
    const answer = operator[op](+a, +b);
    
    
    
    return answer;
}