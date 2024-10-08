function solution(numer1, denom1, numer2, denom2) {
    let denominator = denom1 * denom2;
    let numerator = numer1 * denom2 + numer2 * denom1;
    
    
    let i = 1;
    while(i <= Math.min(denominator, numerator)){
        if(denominator % i === 0 && numerator % i === 0){
            denominator /= i;
            numerator /= i;
            i = 1;
        }
        i++;
    }
    
    const answer = [numerator, denominator];
    return answer;
}