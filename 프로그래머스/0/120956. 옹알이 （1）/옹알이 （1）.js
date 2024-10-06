function solution(babbling) {
    const says = ["aya", "ye", "woo", "ma"];
    const answer = babbling.filter((v)=> {
        return [...says.reduce((acc, cur)=> {
            return acc.replaceAll(cur, "@");
        }, v)].filter((v)=> v !== "@").join("") === "";
    }).length;
    return answer;
}