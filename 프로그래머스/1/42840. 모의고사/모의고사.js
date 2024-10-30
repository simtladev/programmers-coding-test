


function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    
    const answerList = answers.reduce((acc, cur, i)=>{
        if(cur === a[i % a.length]) acc[0]++;
        if(cur === b[i % b.length]) acc[1]++;
        if(cur === c[i % c.length]) acc[2]++;
        
        return acc;
    },[0,0,0])
    
    const answer = answerList.reduce((acc, cur, i)=>  {
        if(cur === Math.max(...answerList)){acc.push(i + 1)};
        return acc;
    },[]) 
    
    
    return answer;
}