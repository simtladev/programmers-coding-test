function solution(s) {
    const answer = s.split(" ").map((v)=> v.toLowerCase().charAt(0).toUpperCase() + v.toLowerCase().slice(1)).join(" ")
    return answer;
}