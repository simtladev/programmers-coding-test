function solution(arr) {
    const answer = arr.reduce((acc, cur)=>[...acc, ...Array(cur).fill(cur)],[])
    return answer;
}