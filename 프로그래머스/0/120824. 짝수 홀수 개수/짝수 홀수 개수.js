function solution(num_list) {
    const answer = num_list.reduce(([a,b], cur)=>{
        return cur % 2 === 0 ? [++a, b] : [a, ++b];
    },[0,0]);
    return answer;
}