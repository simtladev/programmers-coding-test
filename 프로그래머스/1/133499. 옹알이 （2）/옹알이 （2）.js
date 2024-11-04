function solution(babbling) {
    const answer = babbling.filter((v)=> /^(aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma))+$/.test(v)).length;

    return answer;
}