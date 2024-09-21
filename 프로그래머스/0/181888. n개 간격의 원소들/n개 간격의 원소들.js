function solution(num_list, n) {
    const answer = num_list.filter((_,i )=> i % n === 0);
    return answer;
}