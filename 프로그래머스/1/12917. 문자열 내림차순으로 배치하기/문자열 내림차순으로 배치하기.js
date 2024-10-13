function solution(s) {
    const a = [...s].filter((v)=> v === v.toUpperCase()).sort((a,b)=> {
        return a > b ? -1 : 1
    });
    const b = [...s].filter((v)=> v !== v.toUpperCase()).sort((a,b)=> {
        return a > b ? -1 : 1
    });
    const answer = [...b, ...a].join("");
    return answer;
}