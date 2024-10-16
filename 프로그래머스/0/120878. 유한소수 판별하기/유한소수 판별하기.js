function abbreviation(a, b) {
    const minValue = Math.min(a, b);
    for(let i = 2; i <= minValue; i++){
        if(a % i === 0 && b % i === 0){
            a /= i;
            b /= i;
            i = 1;
        }   
    }
    
    return [a, b];
}

function checkDecimal(num) {
    let count = 2;
    let isDecimal = 1;
    
    while(num % 2 === 0) num /= 2;
    while(num % 5 === 0) num /= 5;
    
    return num === 1 ? 1 : 2;
}



function solution(a, b) {
    const [_,denominator] = abbreviation(a, b);
    const answer = checkDecimal(denominator);
    return answer;
}