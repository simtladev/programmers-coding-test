function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    let answer = 0;
    for(let i = 0; i< score.length; i+= m){
        const box = score.slice(i, i + m);
        if(box.length === m){
            answer += box[m - 1] * m;
        }
    }
    
    
    return answer;
}