function solution(num_list, n) {
    const answer = num_list.find((v)=> v ===n) ? 1 : 0;
    return answer;
}