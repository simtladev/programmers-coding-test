function solution(n) {
    let answer = 1;
    let num = 1;
    while(num <= n){
        answer++;
        num *= answer;
    }
    return answer - 1;
}

1 * 2 * 3