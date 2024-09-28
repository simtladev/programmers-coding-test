function solution(my_string) {
    const answer = [...my_string].filter((v)=> !['a', 'e', 'i', 'o', 'u'].includes(v)).join("");
    return answer;
}