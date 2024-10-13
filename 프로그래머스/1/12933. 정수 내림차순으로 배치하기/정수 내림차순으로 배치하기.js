function solution(n) {
    var answer = +[...n.toString()].sort((a,b)=> b - a).join("");
    return answer;
}