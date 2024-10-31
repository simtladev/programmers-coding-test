function solution(k, score) {
    let rank = [];
    const answer = score.reduce((acc, cur)=>{
        rank.push(cur);
        rank.sort((a,b)=>b-a);
        rank = rank.slice(0, k);
        acc.push(rank[rank.length - 1]);
        return acc;
    }, []);
    return answer;
}