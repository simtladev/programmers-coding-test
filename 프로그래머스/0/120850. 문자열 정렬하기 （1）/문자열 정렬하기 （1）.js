function solution(my_string) {
    const answer = [...my_string].filter((v)=> !isNaN(v)).map((v)=>+v).sort((a,b) => a - b);
    return answer;
}