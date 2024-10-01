function solution(spell, dic) {
    const answer = dic.every((v)=> [...v].sort().join("") !== spell.sort().join("")) ? 2 : 1;
    return answer;
}