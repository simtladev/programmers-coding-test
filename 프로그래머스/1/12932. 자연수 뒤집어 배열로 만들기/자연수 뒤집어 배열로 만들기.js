function solution(n) {
    const answer = [...n.toString()].map((v)=> +v).reverse();
    return answer;
}