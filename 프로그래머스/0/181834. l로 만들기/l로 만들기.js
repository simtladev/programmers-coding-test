function solution(myString) {
    // const answer = [...myString].map((v)=> v.charCodeAt() < "l".charCodeAt() ?  'l' : v).join("");
    
    
    const answer = [...myString].map((v)=> v < "l" ?  "l" : v).join("");
    
    
    // l = 108
    return answer;
}