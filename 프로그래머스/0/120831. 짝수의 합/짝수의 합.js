function solution(n) {
    const answer = Array(n).fill(1).map((v, i)=> v + i).filter((v)=> v % 2 === 0).reduce((acc, cur)=> acc + cur, 0);
    return answer;
}