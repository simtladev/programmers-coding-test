function solution(num) {
    let answer = 0;
    while(answer < 500 && num !== 1){
        if(num % 2 === 0){
            num /= 2;
        }else{
            num = num * 3 + 1
        }
        answer++;
    }
    
    return num === 1 ? answer : -1;
}