function solution(rsp) {
    var answer = [...rsp].map((v)=> v === "2" ? "0" : v === "0" ? "5" : "2").join("");
    return answer;
}