function solution(numbers, n) {
    
    if(numbers[0] > n){
        return numbers[0];
    }
    
    const c = [...numbers];
    c.splice(0, 2, numbers[0] + numbers[1]);
    
    return solution(c, n);
}