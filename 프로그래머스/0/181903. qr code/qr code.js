function solution(q, r, code) {    
    const answer = [...code].filter((value, i)=> i % q === r).join("");

    return answer;
}