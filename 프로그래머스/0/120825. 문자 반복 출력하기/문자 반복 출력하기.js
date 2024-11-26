function solution(my_string, n) {
    const answer = [...my_string].map((v)=> v.repeat(n)).join("");
    
    // const answer = [...my_string].map((v)=> Array(n).fill(v)).flat().join("");
    return answer;
}