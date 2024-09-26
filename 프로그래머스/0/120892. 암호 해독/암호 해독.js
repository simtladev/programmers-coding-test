function solution(cipher, code) {
    var answer = [...cipher].filter((_,i)=> (i + 1) % code === 0).join("");
    return answer;
}