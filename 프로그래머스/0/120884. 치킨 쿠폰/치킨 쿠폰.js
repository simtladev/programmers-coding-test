function solution(chicken) {
//     let answer = 0;
//     let count = 0;
//     while(chicken >= 0){
//         if(count === 10){
//             chicken++;
//             answer++;
//             count = 0;
//         }
//         count++;
//         chicken--;
//     }
    const answer = parseInt((chicken - 1) / 9) 
    
    return answer;
}