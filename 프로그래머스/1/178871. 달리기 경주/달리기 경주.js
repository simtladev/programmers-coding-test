function solution(players, callings) {
    const playerMap = Object.fromEntries(players.map((player, i) => [player, i]));
    for(const calling of callings){
        const i = playerMap[calling];
        const temp = players[i-1];
    
        [players[i-1], players[i]] = [players[i], players[i - 1]];
        playerMap[calling] = i - 1;
        playerMap[temp] = i;
        
    }

    return players;
}