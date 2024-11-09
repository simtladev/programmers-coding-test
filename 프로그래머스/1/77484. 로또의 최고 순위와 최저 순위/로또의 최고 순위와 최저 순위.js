function solution(lottos, win_nums) {
    const ranking = [6, 6, 5, 4, 3, 2, 1];
    
    const masterLottoCount = lottos.filter((v)=> v === 0).length;
    const winningCount = lottos.filter((v)=> v !==0 && win_nums.includes(v)).length;
    
    const answer = [ranking[masterLottoCount +  winningCount], ranking[winningCount]]
    
    return answer;
}