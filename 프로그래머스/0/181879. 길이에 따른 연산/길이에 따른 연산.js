function solution(num_list) {
    const answer = num_list.length >= 11 ? num_list.reduce((acc, cur)=> acc + cur) : num_list.reduce((acc, cur)=> acc * cur)
    return answer;
}