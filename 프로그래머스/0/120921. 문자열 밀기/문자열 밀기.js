function solution(A, B) {
    let answer = 0;
    let is = false;
    let CA = A;
    for(let i = 0; i< B.length; i++){
        if(CA === B) {
            is = true;
            break;
        }
        CA = CA.slice(-1) + CA.slice(0, -1);
        answer +=1;
    }
    
    return is ?  answer : -1;
}