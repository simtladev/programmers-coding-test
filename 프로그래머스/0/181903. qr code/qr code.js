function solution(q, r, code) {    
    const answer = [...code].filter((_, i)=> i % q === r).join("");

    return answer;
}