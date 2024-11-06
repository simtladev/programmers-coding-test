function solution(N, stages) {
    
    const stageCounts = stages.filter((v)=> v <= N).reduce((acc, cur)=> (acc[cur] = (acc[cur] || 0) + 1, acc), {});
    const failureRates = {};
    
    let playersPassed = 0;
    for(let i = 1; i <= N; i++){
        const playersOnStage = stageCounts[i] || 0;
        const totalPlayersReached  = stages.length - playersPassed;
        
        failureRates[i] = playersOnStage / (totalPlayersReached  || 1);
        playersPassed += playersOnStage;   
    }
    
    
    const answer = Object.entries((failureRates)).sort((a,b)=> b[1] - a[1]).map((v)=> +v[0]);    
    return answer;
}