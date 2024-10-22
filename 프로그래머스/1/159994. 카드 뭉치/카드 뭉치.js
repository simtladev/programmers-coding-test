function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    
    const answer = goal.every((v)=> v === cards1[i] ? ++i : v === cards2[j] ? ++j : false);
    return answer ? "Yes" : "No";
}