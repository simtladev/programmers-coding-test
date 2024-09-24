function solution(rank, attendance) {
    const ranker = rank.filter((_, i)=> attendance[i]).sort((a, b)=> a - b).slice(0,3);
    const [a, b, c] = ranker.map((v)=> rank.indexOf(v));
    const answer = 10000  * a + 100 * b + c;
    return answer;
}

