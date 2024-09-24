function solution(num_str) {
    const answer = [...num_str].reduce((acc, v)=> +acc + +v);
    return answer;
}