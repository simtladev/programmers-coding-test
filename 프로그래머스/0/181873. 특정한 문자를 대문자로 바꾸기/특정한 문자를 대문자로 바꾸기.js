function solution(my_string, alp) {
    const answer = my_string.replaceAll(alp, alp.toUpperCase());
    return answer;
}