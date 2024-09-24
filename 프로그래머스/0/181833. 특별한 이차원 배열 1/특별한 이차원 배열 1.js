function solution(n) {
    const answer = Array.from({ length: n }, (_, i) => {
        const a = Array(n).fill(0);
        a[i] = 1;  // i번째 값만 1로 설정
        return a;
    });
    return answer;
}