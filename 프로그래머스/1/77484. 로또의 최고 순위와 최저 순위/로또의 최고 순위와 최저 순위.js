function solution(lottos, win_nums) {
    const ranking = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    
    
    const masterLottoCount = lottos.filter((v)=> v === 0).length;
    const winningCount = lottos.filter((v)=> v !==0 && win_nums.includes(v)).length;
    
    const answer = [ranking[masterLottoCount +  winningCount], ranking[winningCount]]
    
    return answer;
}