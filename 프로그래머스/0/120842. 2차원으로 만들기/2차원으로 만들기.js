function solution(num_list, n) {
    const answer = Array.from({length: num_list.length / n}, (_, i)=> num_list.slice(i * n, i * n + n));
    return answer;
}