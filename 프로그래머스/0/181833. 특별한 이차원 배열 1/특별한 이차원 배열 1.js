function solution(n) {
    const answer = Array(n).fill([]).map((_, i)=> {
        const a = Array(n).fill(0);
        a[i] = 1;
        return a;
    });
    return answer;
}