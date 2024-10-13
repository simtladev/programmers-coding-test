function solution(absolutes, signs) {
    const answer = absolutes.reduce((acc, cur, i)=>{
        if(signs[i]){
            return acc +=cur;    
        }else{
            return acc -=cur;
        }
    }, 0);
    return answer;
}