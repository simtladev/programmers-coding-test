function solution(num_list) {
    const answer = num_list.reduce((acc, cur)=> num_list.length >= 11 ? acc + cur : acc * cur);
    return answer;
}