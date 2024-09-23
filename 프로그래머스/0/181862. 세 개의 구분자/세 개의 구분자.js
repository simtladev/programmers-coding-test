function solution(myStr) {
    
    const answer = [...myStr].map((v)=> v === "a" || v === "b" || v === "c" ? "-" : v)
                    .join("").split("-").filter((v)=> v);
    
    
    
    
    
    return answer.length ? answer : ['EMPTY'];
}