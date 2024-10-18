function solution(price, money, count) {
    const answer = Array(count).fill(0).reduce((acc, _, i)=> acc + price * (i + 1),0);
    
    return money > answer ? 0 : answer - money;
}