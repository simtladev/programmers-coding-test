function solution(spell, dic) {
    const answer = dic.every((v)=> {
        return [...v].sort().join("") !== spell.sort().join("")
    }) ? 2 : 1;
    return answer;
}