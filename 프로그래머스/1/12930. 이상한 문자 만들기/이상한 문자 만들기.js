function solution(s) {
    const answer = s.split(" ").map((v)=> [...v].map((word, i)=> 
                   i % 2 === 0 ? word.toUpperCase(): word.toLowerCase()).join("")).join(" ");
    return answer;
}