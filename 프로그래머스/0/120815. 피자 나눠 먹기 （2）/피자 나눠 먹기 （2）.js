function solution(n) {
    let i = 1;
    while((6 * i) % n !== 0){
        i++;    
    }
    
    return i;
}


