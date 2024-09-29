function solution(my_string, n) {
    const answer = [...my_string].map((v)=> v.repeat(n)).join("");
    return answer;
}