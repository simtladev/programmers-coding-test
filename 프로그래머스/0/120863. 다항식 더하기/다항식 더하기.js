function solution(polynomial) {
    const [x, c] = polynomial.split(" + ").reduce(([x, c], cur)=> {
        return cur.includes("x") ? [x + Math.max(+cur.split("x")[0], 1), c] : [x, c + +cur]
    },[0, 0]);
    
    const xPart = x ? `${x === 1 ? '' : x}x` : ''; 
    const cPart = c ? `${x ? " + " : ''}${c}` : ''; 
    
    const answer = xPart + cPart
    
    return answer;
}