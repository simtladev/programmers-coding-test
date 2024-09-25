function solution(n, numlist) {
    const answer = numlist.filter((num)=> num % n === 0);
    return answer;
}