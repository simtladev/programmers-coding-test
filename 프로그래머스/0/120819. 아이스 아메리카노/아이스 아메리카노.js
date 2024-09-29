function solution(money) {
    const americano = 5500;
    const answer = [Math.floor(money / americano), money % americano];
    return answer;
}