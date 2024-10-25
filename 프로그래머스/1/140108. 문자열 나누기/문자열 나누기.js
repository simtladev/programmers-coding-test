function solution(s) {
    let count = 0;
    let x = 0;
    
    const answer = [...s].reduce((acc, cur, i)=>{
        s[x] === cur ? count++ : count--;
        if(count === 0){
            acc.push(s.slice(x, i + 1));
            x = i + 1;
        }else if(i + 1 === s.length){
            acc.push(s.slice(x, i + 1));
        }
        return acc;
    },[]).length;
    return answer;
}