function solution(num_list, n) {
    // const answer = num_list.find((v)=> v ===n) ? 1 : 0;
    
    const answer = +num_list.includes(n);
    return answer;
}