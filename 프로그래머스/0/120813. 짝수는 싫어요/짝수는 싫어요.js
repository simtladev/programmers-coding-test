function solution(n) {
    const answer = Array(n).fill(1).reduce((acc, cur, i)=> {
        if((cur + i) % 2 !== 0) acc.push(cur + i);
        return acc;
    },[]);
    return answer;
}