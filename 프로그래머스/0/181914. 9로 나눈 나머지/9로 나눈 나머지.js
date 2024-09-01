function solution(number) {
    const answer = [...number].reduce((arr, cur)=>{
        return +arr + +cur;
    },0) % 9;
    return answer;
}