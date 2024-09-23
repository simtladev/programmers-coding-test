function solution(myString) {
    var answer = myString.split("x").map((v)=> v.length);
    return answer;
}