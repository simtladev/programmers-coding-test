function solution(my_string) {
    const answer = [...my_string].map((v)=> v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("");
    return answer;
}